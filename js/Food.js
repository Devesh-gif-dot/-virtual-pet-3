class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed = 0;
        this.image = loadImage("images/Milk.png");
    }
    display(){
        var x=10,y=220;
        var k = 10;

        if(this.foodStock>0){
            for(var i =0;i<this.foodStock/2 ;i++){
                x=x+50;
                y=220;
                if(x>650){
                    y = 260;
                    k=k+50;
                    image(this.image,k,y,50,50);
                }
                image(this.image,x,y,50,50);
            }

        }
    }    
    getFoodStock(){
        foodStock = database.ref('Food');
        foodStock.on("value",readStock)
    }
    updateFoodStock(x){
        database.ref('/').update({
            Food: x
        })
    }
    deductFood(){
        this.foodStock =this.foodStock - 1;
    }
    ON(){
        dog.visible = false;
        dogHappy.visible = true;

    }
    OFF(){
        dogHappy.visible = false;
        dog.visible = true;
        
    }
    bedroom(){
        background(bedroomImg,550,500);
    }
    garden(){
        background(gardenImg,550,500);
    }
    bathroom(){
        background(bathroomImg,550,500);
    }    
}