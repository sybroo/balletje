var x, y, v

 class Ball{
   constructor(x,y,w,h,vx,vy){
   this.x = x;
   this.y = y;
   this.width = w;
   this.height = h;
   this.vx = vw;
   this.vy = vy;

}
ball(this.x,this.y,this.width,this.height,this.vx,this.vy)


drawball()

















function setup() {
	createCanvas(500, 400);
function draw() {
	background(0);
  
  ellipse(x,y,70,70);
  x = x + vx;
  y = y + vy;
  
  if(x <= 0 || x >=500){
    vx = vx * -1
  }

  if(y <= 0 || y >=400){
    vy = vy * -1
  }
  
ellipse(s,p,70,70);
  s = s + vs;
  p = p + vp;
  
  if(s <= 0 || s >=500){
    vs = vs * -1
  }

  if(p <= 0 || p >=400){
    vp = vp * -1
  }

}
