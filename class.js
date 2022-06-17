class Animal {
    constructor(name,weight,height){
        console.log("Created animal namem :",name);
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    namelength(){
        return this.name.length;
    }

}
Animal.planet = "Earth";
var dog = new Animal("Fido",25,90);
var fish = new Animal("Goldie",2,02);

console.log(fish.constructor.planet);

