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
class dog extends Animal{
    constructor(name,weight,height,barkvolume,leashcolor){
        super(name,weight,height)
        this.barkvolume = barkvolume;
        this.leashcolor = leashcolor;
    }
    bark(){
        if(this.barkvolume > 50){
            console.log(this.name,"Bark loudly volume (",this.barkvolume,")");

        }      
        else {
            console.log(this.name,"Bark timidly volume (",this.barkvolume,")");

        }  
        
    }

}
class fish extends Animal{
    constructor(name,weight,height,swimspeed){
        super(name,weight,height,swimspeed)
        this.swimspeed = swimspeed;    }
    swim(){
        if(this.swimspeed > 50){
            console.log(this.name,"This fish swim fast (",this.swimspeed,")");

        }      
        else {
            console.log(this.name,"This fish swim slow (",this.swimspeed,")");

        }  
        
    }

}
var king = new dog("king",45,92,72,"red")
king.bark();
var goldie = new fish("goldie",2,0.2,43)
king.bark();
goldie.swim();
