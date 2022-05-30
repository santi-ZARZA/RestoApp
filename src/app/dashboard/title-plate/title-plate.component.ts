import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-plate',
  templateUrl: './title-plate.component.html',
  styleUrls: ['./title-plate.component.css']
})
export class TitlePlateComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  
  constructor() { 
    this.title= "";
    this.description = "";
  }
  ngOnInit(): void {
  }

}
