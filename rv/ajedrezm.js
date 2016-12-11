CaballoForma = function(){
 THREE.Geometry.call(this);
}

CaballoForma.prototype = new THREE.Geometry();

AlfilForma =function(){
 THREE.Geometry.call(this);
 
var base = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 50, 25); 
var base1 = new THREE.CylinderGeometry(0.7, 0.8, 0.2, 50, 25);
var base2 = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 50, 25); 
var base3 = new THREE.CylinderGeometry(0.5, 0.7, 1.5, 50, 25); 
var base4 = new THREE.CylinderGeometry(0.3, 0.6, 0.2, 50, 25); 
var base5 = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 50, 25); 
var cima = new THREE.SphereGeometry( 0.55, 32, 32 );
var cima1 = new THREE.SphereGeometry( 0.1, 32, 32 );

base.translate(0, -1, 0); 
base1.translate(0, -0.8, 0); 
base2.translate(0, -0.6, 0); 
base3.translate(0, -0.4, 0); 
base4.translate(0, 0.5, 0); 
base5.translate(0, 0.6, 0);
cima.translate(0, 0.9, 0);
cima1.translate(0, 1.5, 0);
 
var baseMalla = new THREE.Mesh(base); 
var base1Malla = new THREE.Mesh(base1); 
var base2Malla = new THREE.Mesh(base2); 
var base3Malla = new THREE.Mesh(base3); 
var base4Malla = new THREE.Mesh(base4); 
var base5Malla = new THREE.Mesh(base5); 
var cimaMalla = new THREE.Mesh(cima); 
var cima1Malla = new THREE.Mesh(cima1); 
  
this.merge(baseMalla.geometry,baseMalla.matrix); 
this.merge(base1Malla.geometry,base1Malla.matrix); 
this.merge(base2Malla.geometry,base2Malla.matrix); 
this.merge(base3Malla.geometry,base3Malla.matrix); 
this.merge(base4Malla.geometry,base4Malla.matrix); 
this.merge(base5Malla.geometry,base5Malla.matrix); 
this.merge(cimaMalla.geometry,cimaMalla.matrix); 
this.merge(cima1Malla.geometry,cima1Malla.matrix); 
//this.rotateX(Math.PI*3/2);
this.scale(3,3,7);
}

AlfilForma.prototype = new THREE.Geometry();

ReyForma = function(){
 THREE.Geometry.call(this);
var base = new THREE.CylinderGeometry(0.9, 0.9, 0.2, 50, 25); 
var base1 = new THREE.CylinderGeometry(0.7, 0.9, 0.4, 50, 25);
var base2 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25); 
var base3 = new THREE.CylinderGeometry(0.4, 0.7, 2, 50, 25); 
var base4 = new THREE.TorusGeometry( 0.8, 0.1, 16, 100 );
var base5 = new THREE.CylinderGeometry(0.8, 0.8, 0.15, 50, 25);
var base6 = new THREE.TorusGeometry( 0.6, 0.1, 16, 100 );
var base7 = new THREE.CylinderGeometry(0.6, 0.6, 0.3, 50, 25);
var base8 = new THREE.TorusGeometry( 0.6, 0.1, 16, 100 );
var base9 = new THREE.CylinderGeometry(0.8, 0.5, 0.9, 50, 25);
var cima = new THREE.BoxGeometry( 0.4, 1.3, 0.3 );
var cima1 = new THREE.BoxGeometry( 1, 0.3, 0.3 );
var cima2 = new THREE.TorusGeometry( 0.18, 0.1, 16, 100 );

base.translate(0, -1, 0); 
base1.translate(0, -0.7, 0); 
base2.translate(0, -0.4, 0); 
base3.translate(0, 0.65, 0);
base4.rotateX(Math.PI/2);
base4.translate(0, 1.7, 0); 
base5.translate(0, 1.7, 0);
base6.rotateX(Math.PI/2);
base6.translate(0, 1.8, 0);
base7.translate(0, 1.9, 0);
base8.rotateX(Math.PI/2);
base8.translate(0, 2.1, 0);
base9.translate(0, 2.2, 0);
cima.translate(0, 3, 0);
cima1.translate(0, 3.2, 0);
cima2.rotateX(Math.PI/2);
cima2.translate(0, 2.7, 0);

var baseMalla = new THREE.Mesh(base); 
var base1Malla = new THREE.Mesh(base1); 
var base2Malla = new THREE.Mesh(base2); 
var base3Malla = new THREE.Mesh(base3); 
var base4Malla = new THREE.Mesh(base4); 
var base5Malla = new THREE.Mesh(base5); 
var base6Malla = new THREE.Mesh(base6); 
var base7Malla = new THREE.Mesh(base7); 
var base8Malla = new THREE.Mesh(base8); 
var base9Malla = new THREE.Mesh(base9); 
var cimaMalla = new THREE.Mesh(cima); 
var cima1Malla = new THREE.Mesh(cima1); 
var cima2Malla = new THREE.Mesh(cima2); 
 
this.merge(baseMalla.geometry,baseMalla.matrix); 
this.merge(base1Malla.geometry,base1Malla.matrix); 
this.merge(base2Malla.geometry,base2Malla.matrix); 
this.merge(base3Malla.geometry,base3Malla.matrix); 
this.merge(base4Malla.geometry,base4Malla.matrix); 
this.merge(base5Malla.geometry,base5Malla.matrix); 
this.merge(base6Malla.geometry,base6Malla.matrix); 
this.merge(base7Malla.geometry,base7Malla.matrix); 
this.merge(base8Malla.geometry,base8Malla.matrix); 
this.merge(base9Malla.geometry,base9Malla.matrix); 
this.merge(cimaMalla.geometry,cimaMalla.matrix); 
this.merge(cima1Malla.geometry,cima1Malla.matrix);
this.merge(cima2Malla.geometry,cima2Malla.matrix); 
//this.rotateX(Math.PI*3/2);
this.scale(5,5,10);
}

ReyForma.prototype = new THREE.Geometry();

ReinaForma = function(){
 THREE.Geometry.call(this);
 
var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25);
var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );
var base3 = new THREE.CylinderGeometry(0.5, 0.6,0.4,50,25);
var base4 = new THREE.TorusGeometry( 0.45, 0.1, 16, 100 );
var base5 = new THREE.CylinderGeometry(0.3, 0.45,1,50,25);
var base6 = new THREE.TorusGeometry( 0.3, 0.15, 16, 100 );
var base7 = new THREE.CylinderGeometry(0.5, 0.35,0.4,50,25);
var base8 = new THREE.TorusGeometry( 0.4, 0.1, 16, 100 );
var base9 = new THREE.SphereGeometry( 0.4, 32,32 );
var base10 = new THREE.SphereGeometry( 0.1, 32,32 );

base2.rotateX(Math.PI/2);
base4.rotateX(Math.PI/2);
base6.rotateX(Math.PI/2);
base8.rotateX(Math.PI/2);

base.translate(0, -1, 0);
base2.translate(0, -0.9, 0);
base3.translate(0, -0.6, 0);
base4.translate(0, -0.4, 0);
base5.translate(0, 0.2, 0);
base6.translate(0, 0.8, 0);
base7.translate(0, 1.1, 0);
base8.translate(0, 1.3, 0);
base9.translate(0, 1.2, 0);
base10.translate(0, 1.6, 0);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);
var base3Malla = new THREE.Mesh(base3);
var base4Malla = new THREE.Mesh(base4);
var base5Malla = new THREE.Mesh(base5);
var base6Malla = new THREE.Mesh(base6);
var base7Malla = new THREE.Mesh(base7);
var base8Malla = new THREE.Mesh(base8);
var base9Malla = new THREE.Mesh(base9);
var base10Malla = new THREE.Mesh(base10);

this.merge(baseMalla.geometry,baseMalla.matrix);
this.merge(base2Malla.geometry,base2Malla.matrix);
this.merge(base3Malla.geometry,base3Malla.matrix);
this.merge(base4Malla.geometry,base4Malla.matrix);
this.merge(base5Malla.geometry,base5Malla.matrix);
this.merge(base6Malla.geometry,base6Malla.matrix);
this.merge(base7Malla.geometry,base7Malla.matrix);
this.merge(base8Malla.geometry,base8Malla.matrix);
this.merge(base9Malla.geometry,base9Malla.matrix);
this.merge(base10Malla.geometry,base10Malla.matrix);
this.rotateX(Math.PI*3/2);
this.scale(5,5,7);

}

ReinaForma.prototype = new THREE.Geometry();

TorreForma = function(){
 THREE.Geometry.call(this);

var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25);
var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );
var base3 = new  THREE.CylinderGeometry(0.35, 0.55, 1.5, 50, 25);
var cima = new THREE.TorusGeometry( 0.35, 0.1, 16, 100 );
var cima2 = new THREE.CylinderGeometry(0.55, 0.45, 0.2, 50, 25);
var punta = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var punta1 = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var punta2 = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var punta3 = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var anillo = new THREE.TorusGeometry( 0.4, 0.1, 16, 100 );

base2.rotateX(Math.PI/2);
cima.rotateX(Math.PI/2);
anillo.rotateX(Math.PI/2);
  
base.translate(0, -1, 0);
base2.translate(0, -0.9, 0);
base3.translate(0, 0.05, 0);
cima.translate(0, 0.8, 0);
cima2.translate(0, 0.9, 0);
punta.translate(0, 1.1, 0.35);
punta1.translate(0, 1.1, -0.35);
punta2.translate(0.35, 1.1, 0);
punta3.translate(-0.35, 1.1, 0);
anillo.translate(0,-0.2, 0);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);
var base3Malla = new THREE.Mesh(base3);
var cimaMalla = new THREE.Mesh(cima);
var cima2Malla = new THREE.Mesh(cima2);
var puntaMalla = new THREE.Mesh(punta);
var punta1Malla = new THREE.Mesh(punta1);
var punta2Malla = new THREE.Mesh(punta2);
var punta3Malla = new THREE.Mesh(punta3);
var anilloMalla = new THREE.Mesh(anillo);

this.merge(baseMalla.geometry,baseMalla.matrix);
this.merge(base2Malla.geometry,base2Malla.matrix);
this.merge(base3Malla.geometry,base3Malla.matrix);
this.merge(cimaMalla.geometry,cimaMalla.matrix);
this.merge(cima2Malla.geometry,cima2Malla.matrix);
this.merge(puntaMalla.geometry,puntaMalla.matrix);
this.merge(punta1Malla.geometry,punta1Malla.matrix);
this.merge(punta2Malla.geometry,punta2Malla.matrix);
this.merge(punta3Malla.geometry,punta3Malla.matrix);
this.merge(anilloMalla.geometry,anilloMalla.matrix);
this.rotateX(Math.PI*3/2);
this.scale(5,5,7);
}

TorreForma.prototype = new THREE.Geometry();

PeonForma = function(){
THREE.Geometry.call(this);
var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25);
var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );
var base3 = new  THREE.CylinderGeometry(0.25, 0.55, 1, 50, 25);
var cima = new THREE.SphereGeometry( 0.4, 32, 32 );

base2.rotateX(Math.PI/2);
base.translate(0, -1, 0);
base2.translate(0, -0.9, 0);
base3.translate(0, -0.2, 0);
cima.translate(0, 0.5, 0);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);
var base3Malla = new THREE.Mesh(base3);
var cimaMalla = new THREE.Mesh(cima);

this.merge(baseMalla.geometry,baseMalla.matrix);
this.merge(base2Malla.geometry,base2Malla.matrix);
this.merge(base3Malla.geometry,base3Malla.matrix);
this.merge(cimaMalla.geometry,cimaMalla.matrix);
this.rotateX(Math.PI*3/2);
this.scale(5,5,7);
}

PeonForma.prototype = new THREE.Geometry();

function Sensor(position,direction)
{
  THREE.Raycaster.call(this,position,direction);
  this.colision=false;
}
Sensor.prototype = new THREE.Raycaster();

function Agent(x=0,  y=0){
THREE.Object3D.call(this);
this.position.x = x;
this.position.y = y;
}

Agent.prototype = new THREE.Object3D();
//Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {
var command = this.actuator.commands.pop();
  if(command===undefined)
    console.log('Undefined command');
  else if(command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');
};

Agent.prototype.operations={};

Agent.prototype.operations.goStraightX=function(pieza,distance)
{
  if(distance===undefined)
  {
    if(X<x)
      distance=0.5;
    else if(X===x)
      distance=0;
    else
      distance=-0.5; 
  }
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
};

Agent.prototype.operations.goStraightY=function(pieza,distance)
{
  if(distance===undefined)
   {
    if(Y<y)
      distance=0.5;
    else if(Y===y)
      distance=0;
    else
      distance=-0.5; 
  }
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Agent.prototype.operations.goDiagonal=function(pieza,distance)
{
  if(distance===undefined)
   {
    if(Y<y&&X<x){
      distance=0.5;
      pieza.position.x+=distance*Math.cos(pieza.rotation.z);
      pieza.position.y+=distance*Math.cos(pieza.rotation.z);
    }
     else if(Y<y&&X>x){
      distance=0.5;
      pieza.position.x-=distance*Math.cos(pieza.rotation.z);
      pieza.position.y+=distance*Math.cos(pieza.rotation.z);
     }
     else if(Y>y&&X<x){
      distance=0.5;
      pieza.position.x+=distance*Math.cos(pieza.rotation.z);
      pieza.position.y-=distance*Math.cos(pieza.rotation.z);
     }
     else if(Y>y&&X>x){
      distance=0.5;
      pieza.position.x-=distance*Math.cos(pieza.rotation.z);
      pieza.position.y-=distance*Math.cos(pieza.rotation.z);
     }
    else if(Y===y)
      distance=0;
    else
      distance=-0.5;  
 } 
};

Agent.prototype.operations.stop=function(pieza,distance)
{
  if(distance===undefined)
    distance=0;
  pieza.position.x+=distance*Math.cos(pieza.rotation.z);
  pieza.position.y+=distance*Math.cos(pieza.rotation.z);
};

Agent.prototype.sense=function(environment){};

function Environment(){
THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function(){
for (var i = 0; i < this.children.length; i++){
if (this.children[i].sense !== undefined)
this.children[i].sense(this);
}
}

Environment.prototype.plan = function(){
for ( var i = 0; i < this.children.length; i++){
if (this.children[i].plan !== undefined)
this.children[i].plan(this);
}
}

Environment.prototype.act = function(){
for ( var i = 0; i < this.children.length; i++){
if (this.children[i].act !== undefined)
this.children[i].act(this);
}
}

function Borde(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 0.7), new THREE.MeshLambertMaterial({map: textura.load("marmolcafe.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = -10;
}
Borde.prototype = new THREE.Mesh();

function EspacioGris(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10), new THREE.MeshLambertMaterial({map: textura.load("MarmolGris.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = -10;
}
EspacioGris.prototype = new THREE.Mesh();

function EspacioBlanco(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10), new THREE.MeshLambertMaterial({map: textura.load("MarmolBlanco.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = -10;
}
EspacioBlanco.prototype = new THREE.Mesh();

Environment.prototype.setMap = function(map){
textura=new THREE.TextureLoader();
for (var i= 0; i< map.length ; i++){
for (var j= 0; j < map.length; j++){
if (map[i][j] === "x")
this.add(new Borde(10,(i*10)-50,(j*10)-50));
else if (map[i][j] === "y")
this.add( new EspacioGris(10,(i*10)-50,(j*10)-50));
 else if (map[i][j] === "z")
this.add( new EspacioBlanco(10,(i*10)-50,(j*10)-50));
}
}
}

Environment.prototype.setMapPiezas=function(map){
for (var i= 0; i< map.length ; i++){
for (var j= 0; j < map.length; j++){
/*if(map[i][j]==="c")
      {
        this.add(new Caballo(true,(j*10)-50,(i*10)-55));
      }
      if(map[i][j]==="C")
      {
        this.add(new Caballo(false,(j*10)-50,(i*10)-50));
      }*/
      if(map[i][j]==="a")
      {
        this.add(new Alfil(true,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="A")
      {
        this.add(new Alfil(false,(j*10)-50,(i*10)-50));
      }
     /* if(map[i][j]==="x")
      {
        this.add(new Reina(true,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="X")
      {
        this.add(new Reina(false,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="r")
      {
        this.add(new Rey(true,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="R")
      {
        this.add(new Rey(false,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="t")
      {
        this.add(new Torre(true,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="T")
      {
        this.add(new Torre(false,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="p")
      {
        this.add(new Peon(true,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="P")
      {
        this.add(new Peon(false,(j*10)-50,(i*10)-50));
      } 
      */
}
}
}

function Alfil(sTP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.sTP = sTP;
  if(this.sTP===true)
    this.actuator=new THREE.Mesh(new AlfilForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolGris.jpg")}));
  else
    this.actuator=new THREE.Mesh(new AlfilForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolBlanco.jpg")}));
  this.position.set=(x,y,0);
  this.sensor=new Sensor();
  this.add(this.actuator);
  this.actuator.rotateX(Math.PI/2);
  this.actuator.castShadow=true;
}
Alfil.prototype=new Agent();

Alfil.prototype.sense=function(environment){
  if(Y!==y&&X!==x&&Math.abs(y-Y)===Math.abs(x-X)){
    if (X<x&&Y<y)
      this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0));
    else if (X<x&&Y>y)
      this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.PI/4), -Math.sin(Math.PI/4), 0));
    else if (X>x&&Y<y)
      this.sensor.set(this.position, new THREE.Vector3(-Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0));
    else if (X>x&&Y>y)
      this.sensor.set(this.position, new THREE.Vector3(-Math.cos(Math.PI/4), -Math.sin(Math.PI/4), 0));
  }
  var obstaculo=this.sensor.intersectObjects(environment.children,true);    
  if( obstaculo.length>0 && obstaculo[0].object.parent.sTP !== this.sTP ){
    if ( Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2))<=(obstaculo[0].distance+10*Math.sqrt(2)) ){
      this.sensor.colision=false;
      if (obstaculo[0].distance<=Math.sqrt(2))
        if (this.sTP === true){
          obstaculo[0].object.translate(50+bi,-50+bj,0);
          //bi++;
          bj+=10;
        }
      else{
          obstaculo[0].object.translate(-50+ni,-50+nj,0);
          //ni-=10;
          nj+=10;
        }
    }
    else
      this.sensor.colision=true;
  }
  else if ( obstaculo.length>0 && obstaculo[0].object.parent.sTP === this.sTP  ){
    if( obstaculo[0].distance<Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2)) )
      this.sensor.colision=true;  
  }
  else
    this.sensor.colision=false;
};

Alfil.prototype.plan=function(environment)
{
  this.actuator.commands=[];
  if (this.sensor.colision === false){
    if(X!==x&&Y!==y&&Math.abs(y-Y)===Math.abs(x-X))
      this.actuator.commands.push('goDiagonal');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
    }
  }
};

function SeleccionD(event)
{
  event.preventDefault();
  var mouse3D=new THREE.Vector3((event.clientX/window.innerWidth)*2-1,-(event.clientY/window.innerHeight)*2+1,0);     
  var raycaster=new THREE.Raycaster();                                        
  raycaster.setFromCamera(mouse3D,camara);
  seleccion=raycaster.intersectObjects(environment.children,true);
  if(seleccion.length>0)
  { 
    console.log(turno);
    
    if(seleccionF1==false)
      id=seleccion[0].object.id;
    console.log(id);
    
    if(seleccionF1==true)
    {
      x=seleccion[0].point.x;
      y=seleccion[0].point.y;
      seleccionF2=true;
    }
    
    if(X===x&&Y===y)
    {
      turno=!turno
    }
    
    if((-50<x&&x<50&&40<y&&y<50)||(-50<x&&x<50&&-50<y&&y<-40)||(-50<y&&y<50&&-50<x&&x<-40)||(-50<y&&y<50&&40<x&&x<50))
      seleccion[0].object.material.color.setHex(0xffffff);
    else
      seleccion[0].object.material.color.setHex(0x00ff00);
    
    if(-40<x&&x<-30)
      x=-35;
    else if(-30<x&&x<-20)
      x=-25;
    else if(-20<x&&x<-10)
      x=-15;
    else if(-10<x&&x<0)
      x=-5;
    else if(0<x&&x<10)
      x=5;
    else if(10<x&&x<20)
      x=15;
    else if(20<x&&x<30)
      x=25;
    else if(30<x&&x<40)
      x=35;
    if(-40<y&&y<-30)
      y=-35;
    else if(-30<y&&y<-20)
      y=-25;
    else if(-20<y&&y<-10)
      y=-15;
    else if(-10<y&&y<0)
      y=-5;
    else if(0<y&&y<10)
      y=5;
    else if(10<y&&y<20)
      y=15;
    else if(20<y&&y<30)
      y=25;
    else if(30<y&&y<40)
      y=35;
    console.log(x);
    console.log(y);
  }
}

function SeleccionU(event) 
{
  activar=true;
  event.preventDefault();
  seleccion[0].object.material.color.setHex(0xffffff);
  seleccionF1=true;   
}


function setup(){
document.documentElement.style.overflow = 'hidden';
var mapa = new Array();
mapa[0] = "xxxxxxxxxx";
mapa[1] = "xyzyzyzyzx";
mapa[2] = "xzyzyzyzyx";
mapa[3] = "xyzyzyzyzx";
mapa[4] = "xzyzyzyzyx";
mapa[5] = "xyzyzyzyzx";
mapa[6] = "xzyzyzyzyx";
mapa[7] = "xyzyzyzyzx";
mapa[8] = "xzyzyzyzyx";
mapa[9] = "xxxxxxxxxx";
 
var mapa2=new Array();
  mapa2[0]="          ";
  mapa2[1]=" tcarxact ";
  mapa2[2]=" pppppppp ";
  mapa2[3]="          ";
  mapa2[4]="          ";
  mapa2[5]="          ";
  mapa2[6]="          ";
  mapa2[7]=" PPPPPPPP ";
  mapa2[8]=" TCARXACT ";
  mapa2[9]="          ";

environment = new Environment();
environment.setMap( mapa );
environment.setMapPiezas(mapa2);
 
document.addEventListener('mousedown',SeleccionD);
document.addEventListener('mouseup',SeleccionU);
 
var campoVision = 45; 
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano =10;
var planoLejano = 10000;
camara = new THREE.PerspectiveCamera(campoVision,
                                          relacionAspecto,
                                          planoCercano,
                                          planoLejano);
camara.position.z = 150;
camara.position.y = -160;
camara.lookAt(new THREE.Vector3(0,0,0));
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight);
renderizador.shadowMapEnabled = true;
document.body.appendChild(renderizador.domElement);
 
iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.z = 160;
iluminacion.position.x = 100;
iluminacion.position.y = 100;
iluminacion.castShadow = true;

environment.add(camara);
environment.add(iluminacion);
}

function loop(){
requestAnimationFrame(loop);
environment.sense();
environment.plan();
environment.act();
renderizador.render(environment,camara);
}

var environment, camara, renderizador, iluminacion,bi=0,bj=0,nj=0,ni=0,turno=false,sTC,id,avance,seleccion,x,X,Y,Z,z,y,activar=false,seleccionO=true,seleccionF2=false,seleccionF1=false,xf,yf;

setup();
loop();

