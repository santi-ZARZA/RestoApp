import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Plate } from "../models/plate";


@Injectable()
export class RestaurantService {

    constructor(
        private http: HttpClient
        ) {}

    GetPlates(filter: string){
        return this.http.get("https://api.spoonacular.com/food/menuItems/search?apiKey="+environment.apiKey+"&query="+filter+"&addMenuItemInformation=true");
    }

    GetPlate(id: string){
        return this.http.get("https://api.spoonacular.com/food/menuItems/"+id+"?apiKey="+environment.apiKey);
    }

}