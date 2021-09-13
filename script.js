 class Ball{
   constructor(x,y,w,h,vx,vy){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
   }

  drawBall(){
    fill(255)
    ellipse(this.x,this.y,this.width,this.height)
    this.x = this.x + this.vx;
    this.y = this.x + this.vy;

  if(this.x <=0 || this.x >=500){
      this.vx = -this.vx
      }

  if(this.y <=0 || this.y >=400){
      this.vy = -this.vy
      }

  }
 }


function setup(){
  createCanvas (500,400);
 ball1 = new Ball(10,10,50,50,5,5)
}

function draw(){
 background(100);
 ball1.drawBall();

}