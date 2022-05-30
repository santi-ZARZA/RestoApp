import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-plate',
  templateUrl: './features-plate.component.html',
  styleUrls: ['./features-plate.component.css']
})
export class FeaturesPlateComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { 
    this.title= "";
    this.description = "";
  }

  ngOnInit(): void {
  }

}
