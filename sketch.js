let walls=[];
let c;
let part;
function setup() {
  createCanvas(400, 400);
  for(let i=0;i<5;i++)
  {
      let x1=random(width);
      let x2=random(width);
      let y2=random(height);
      let y1=random(height);
      walls[i]=new Boundary(x1,y1,x2,y2);
  }
  walls.push(new Boundary(0,0,width,0))
  walls.push(new Boundary(width,0,width,height))
  walls.push(new Boundary(width,height,0,height))
  walls.push(new Boundary(0,width,0,0))
 // c=new Ray(1,6);
  part = new Particle();
}

function draw() {
  background("blue");
  for(let b of walls){b.show();}
  
  part.update(mouseX,mouseY);
  part.look(walls);
  part.show();
  //c.lookAt(mouseX,mouseY)
  //c.show();
  
  
 /*let pt=c.cast(b);
  console.log(pt);
  if(pt)
  {
    fill(255);
    ellipse(pt.x,pt.y,8,8);
  }
  */
}

