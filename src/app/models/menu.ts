import { Plate } from "./plate";

export class Menu {
    menuItems: Array<Plate> = [];
    healtScore?: number;
    timePreparation?: number;
    totalPrice?: number;

    constructor(){
        this.menuItems = [];
        this.healtScore = 0;
        this.timePreparation = 0;
        this.totalPrice = 0;
    }
}
