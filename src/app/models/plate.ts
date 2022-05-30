export class Plate {
    public id: number;
    public image: string;
    public imageType: string;
    public title: string;  
    public price?: number;  

    constructor(id: number, image: string, imageType: string, title: string, price?: number) {
        this.id = id;
        this.image = image;
        this.imageType = imageType;
        this.title = title;
        this.price = price;
    }
}