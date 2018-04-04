export class Recipe {
    public name: string;
    public cat: string; 
    public desc: string;
    public imgURL: string;

    constructor(name: string, cat: string, desc: string, imgURL: string) {
        this.name = name;
        this.cat = cat;
        this.desc = desc;
        this.imgURL = imgURL;
    }
}