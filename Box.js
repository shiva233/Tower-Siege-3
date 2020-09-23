class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  
    this.visibilty = 255;

  
  }

  display(){

    if(this.body.speed < 3){

      super.display();

    }
    else{

      World.remove(world,this.body);

      push()
      
      this.visibilty = this.visibilty - 5;

      tint(255,this.visibilty);

      image(this.image,this.body.position.x,this.body.position.y,30,40)
      
      pop()

    }
    

  }

 
  score() {

    if(this.visibilty <0 && this.visibilty >- 105){

      Score++;

    }


  }
  
  
  


};
