import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plate } from '../models/plate';
import { Menu } from "../models/menu";
import { RestaurantService } from '../services/RestaurantService.service';
import { NgbCarouselConfig, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { fromEvent, scan, debounce, interval, debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menu: Menu = new Menu();
  tablePlates: Array<Plate> = [];
  tablesSelected: Array<Plate> = [];
  private filter = new Subject<string>();
  //@ViewChild('filterPlate', {static: true}) filter!: ElementRef;

  constructor(
    private restoService: RestaurantService,
    private carouselConfig: NgbCarouselConfig,
    private modalService: NgbModal) { 
      carouselConfig.interval = 2000;  
      carouselConfig.wrap = true;  
      carouselConfig.keyboard = false;  
      carouselConfig.pauseOnHover = true; 
    }

  ngOnInit(): void {
    this.filter.pipe(debounceTime(500))
            .subscribe((value)=>{
              if(value.length >= 2)
              {this.GetPlates(value);}
            });

  }

  OnInputChange($event:any){
    //console.log($event);
    let value = $event.target.value;
    this.filter.next(value);
  }

  GetPlates(filter:string){
    this.restoService.GetPlates(filter).subscribe(
      (data: any) =>{
        this.tablePlates = data.menuItems as Plate[];
        console.log(data);
    });
  }

  
  openForm(content: any) {
    this.modalService.open(content,{size: 'lg'});
  }

  CerrarModal(modal:any){
    this.tablesSelected = [];
    modal.dismiss('Cross click');
  }

  Select(plate:Plate){
    this.tablesSelected.push(plate);
  }

  Agregar(modal:any){
    if(this.tablesSelected){
      this.menu.menuItems = this.tablesSelected;
      modal.dismiss('Cross click');
    }
  }
}
