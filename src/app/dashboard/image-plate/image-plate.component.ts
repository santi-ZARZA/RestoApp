import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-plate',
  templateUrl: './image-plate.component.html',
  styleUrls: ['./image-plate.component.css']
})
export class ImagePlateComponent implements OnInit {

  @Input() srcImg: string;
  @Input() description: string;

  constructor() { 
    this.srcImg = "";
    this.description = "";
  }

  ngOnInit(): void {
  }

}
