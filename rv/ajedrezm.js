CaballoForma = function(){
 THREE.Geometry.call(this);
 
var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25);
var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );
var base3 = new THREE.BoxGeometry(0.7,1.5,0.5);
var base4 = new THREE.CylinderGeometry(0.5, 0.5, 0.5, 50, 25, false,5.5,5);
var base5 = new THREE.ConeGeometry( 0.1, 0.4, 32 );
var base6 = new THREE.ConeGeometry( 0.1, 0.4, 32 );

base2.rotateX(Math.PI/2);
base4.rotateX(Math.PI/2);
base4.rotateZ(Math.PI/2);

base.translate(0, -1, 0);
base2.translate(0, -0.9, 0);
base3.translate(0,-0.4,0);
base4.translate(0.15,0.3,0);
base5.translate(0,0.8,0.15);
base6.translate(0,0.8,-0.15);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);
var base3Malla = new THREE.Mesh(base3);
var base4Malla = new THREE.Mesh(base4);
var base5Malla = new THREE.Mesh(base5);
var base6Malla = new THREE.Mesh(base6);
 
this.merge(baseMalla.geometry,baseMalla.matrix);
this.merge(base2Malla.geometry,base2Malla.matrix);
this.merge(base3Malla.geometry,base3Malla.matrix);
this.merge(base4Malla.geometry,base4Malla.matrix);
this.merge(base5Malla.geometry,base5Malla.matrix);
this.merge(base6Malla.geometry,base6Malla.matrix);
this.scale(5,10,5);
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
//this.scale(3,9,3);
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
this.scale(4,6,4);
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
this.scale(4,4,10);

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
this.scale(4,4,10);
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
this.scale(4,4,6);
}

PeonForma.prototype = new THREE.Geometry();

function Sensor(position,direction)
{
  THREE.Raycaster.call(this,position,direction);
  this.colision=false;
}
Sensor.prototype = new THREE.Raycaster();
///////////////AGENTE///////////////
function Agent(x=0,y=0)
{
  THREE.Object3D.call(this);
  this.position.x=x;
  this.position.y=y;
}
Agent.prototype=new THREE.Object3D();

Agent.prototype.plan=function(environment){};

Agent.prototype.act=function(environment){
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

function Environment()
{
  THREE.Scene.call(this);
}
Environment.prototype=new THREE.Scene();

Environment.prototype.sense=function()
{
  for(var i=0;i<this.children.length;i++)
  {
    if(this.children[i].sense!==undefined)
      this.children[i].sense(this);
  }
}

Environment.prototype.plan=function()
{
  for(var i=0;i<this.children.length;i++)
  {
    if(this.children[i].plan!==undefined)
      this.children[i].plan(this);
  }
}

Environment.prototype.act=function()
{
  for(var i=0;i<this.children.length;i++)
  {
    if(this.children[i].act!==undefined)
      this.children[i].act(this);
  }
}

function Borde(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 0.7), new THREE.MeshLambertMaterial({map: textura.load("marmolcafe.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = -14;
}
Borde.prototype = new THREE.Mesh();

function EspacioGris(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10), new THREE.MeshLambertMaterial({map: textura.load("MarmolGris.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = -14;
}
EspacioGris.prototype = new THREE.Mesh();

function EspacioBlanco(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10), new THREE.MeshLambertMaterial({map: textura.load("MarmolBlanco.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = -14;
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
if(map[i][j]==="c")
      {
        this.add(new Caballo(true,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="C")
      {
        this.add(new Caballo(false,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="a")
      {
        this.add(new Alfil(true,(j*10)-50,(i*10)-50));
      }
      if(map[i][j]==="A")
      {
        this.add(new Alfil(false,(j*10)-50,(i*10)-50));
      }
     if(map[i][j]==="x")
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
}
}
}

function Alfil(texturaP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.texturaP = texturaP;
  if(this.texturaP===true)
 this.actuator=new THREE.Mesh(new AlfilForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolGris.jpg")}));
  else
 this.actuator=new THREE.Mesh(new AlfilForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolBlanco.jpg")}));
 this.actuator.scale.set(4,8,4);
 this.position.set=(x,y,0);
 this.sensor=new Sensor();  
 this.actuator.rotateX(Math.PI/2);
 this.add(this.actuator);
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
  if( obstaculo.length>0 && obstaculo[0].object.parent.texturaP !== this.texturaP ){
    if ( Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2))<=(obstaculo[0].distance+10*Math.sqrt(2)) ){
      this.sensor.colision=false;
      if (obstaculo[0].distance<=Math.sqrt(2))
        if (this.texturaP === true){
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
  else if ( obstaculo.length>0 && obstaculo[0].object.parent.texturaP === this.texturaP  ){
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

function Peon(texturaP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.texturaP = texturaP;
  if(this.texturaP===true)
 this.actuator=new THREE.Mesh(new PeonForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolGris.jpg")}));
  else
 this.actuator=new THREE.Mesh(new PeonForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolBlanco.jpg")}));
 this.position.set=(x,y,0);
 this.sensor=new Sensor();  
 this.actuator.rotateX(Math.PI);
 this.add(this.actuator);
 this.actuator.castShadow=true;
}
Peon.prototype=new Agent();

Peon.prototype.sense=function(environment){
  if (this.texturaP === true){
    if (y===Y&&x!==X){
      this.sensor.set(this.position, new THREE.Vector3(0, 1, 0));
      var diagon=false;
    }
    else if (Y!==y&&X!==x&&Math.abs(y-Y)===Math.abs(x-X)){
      var diagon=true;
      if (X<x&&Y<y)
        this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0));
      else if (X>x&&Y<y)
        this.sensor.set(this.position, new THREE.Vector3(-Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0));
      }
  }
  else{
    if (y===Y&&x!==X){
      this.sensor.set(this.position, new THREE.Vector3(0, -1, 0));
      var diagon=false;
    }
    else if (Y!==y&&X!==x&&Math.abs(y-Y)===Math.abs(x-X)){
      var diagon=true;
      if (X<x&&Y>y)
        this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.PI/4), -Math.sin(Math.PI/4), 0));
      else if (X>x&&Y>y)
        this.sensor.set(this.position, new THREE.Vector3(-Math.cos(Math.PI/4), -Math.sin(Math.PI/4), 0));
    }
  }  
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if (diagon === false){
    this.diagonal=false;
    if( obstaculo.length>0 && obstaculo[0].distance<Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2)) ){
      this.sensor.colision=true;
      obstaculo[0].object.material.color.setHex(0xff00ff);}
    else
      this.sensor.colision=false;
  }
  else{ 
    if( obstaculo.length>0 && obstaculo[0].object.parent.texturaP !== this.texturaP ){
      if (obstaculo[0].distance<=10*Math.sqrt(2)){
        this.diagonal=true;
        this.sensor.colision=false;
      }
      if (obstaculo[0].distance<Math.sqrt(2)){
        if (this.texturaP === true){
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
    }
    else
      this.sensor.colision=false;
  }
};

Peon.prototype.plan=function(environment)
{
  this.actuator.commands=[];
  if (this.sensor.colision === false){
      if(Y>=-25 && Y<-15) {
        if( y-Y<=20 && y-Y>0 && x===X ) 
          this.actuator.commands.push('goStraightY');
      }
      else if(y-Y<=10 && y-Y>0 && x===X)
        this.actuator.commands.push('goStraightY');
    if (this.sTP===true){
      if( y-Y<=10 && y-Y>0 && Math.abs(x-X)<=10 ){
        if(this.diagonal === true)
          this.actuator.commands.push('goDiagonal');
      }
    }
    else{
      if(Y<=25 && Y>15) {
        if( Y-y<=20 && Y-y>0 && x===X ) 
          this.actuator.commands.push('goStraightY');
      }
      else if(Y-y<=10 && Y-y>0 && x===X)
        this.actuator.commands.push('goStraightY');
      if( Y-y<=10 && Y-y>0 && Math.abs(x-X)<=10 ){
        if(this.diagonal === true)
          this.actuator.commands.push('goDiagonal');
      }
    }
    if(X===x&&Y===y)
      {
        this.actuator.commands.push('stop');
        seleccionF2=false;
        seleccionF1=false;
        this.diagonal=false;
      }
  }  
};

function Rey(texturaP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.texturaP = texturaP;
  if(this.texturaP===true)
 this.actuator=new THREE.Mesh(new ReyForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolGris.jpg")}));
  else
 this.actuator=new THREE.Mesh(new ReyForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolBlanco.jpg")}));
 this.position.set=(x,y,0);
 this.sensor=new Sensor();  
 this.actuator.rotateX(Math.PI/2);
 this.add(this.actuator);
 this.actuator.castShadow=true;
}
Rey.prototype=new Agent();

Rey.prototype.sense=function(environment){
    if(X!==x&&Y===y){
    if (X<x)
      this.sensor.set(this.position, new THREE.Vector3(1, 0, 0));
    else
      this.sensor.set(this.position, new THREE.Vector3(-1, 0, 0));
  }
  else if(Y!==y&&X===x){
    if (Y<y)
      this.sensor.set(this.position, new THREE.Vector3(0, 1, 0));
    else
      this.sensor.set(this.position, new THREE.Vector3(0, -1, 0));
  }
  else if(Y!==y&&X!==x&&Math.abs(y-Y)===Math.abs(x-X)){
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
  if( obstaculo.length>0 && obstaculo[0].distance<Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2)) ){
    this.sensor.colision=true;
    obstaculo[0].object.material.color.setHex(0xff00ff);}
  else
    this.sensor.colision=false;
  if( obstaculo.length>0 && obstaculo[0].object.parent.texturaP !== this.texturaP ){
    if ( Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2))<=(obstaculo[0].distance+10*Math.sqrt(2)) ){
      this.sensor.colision=false;
      if (obstaculo[0].distance<=Math.sqrt(2))
        if (this.texturaP === true){
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
  else if ( obstaculo.length>0 && obstaculo[0].object.parent.texturaP === this.texturaP  ){
    if( obstaculo[0].distance<Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2)) )
      this.sensor.colision=true;  
  }
  else
    this.sensor.colision=false;
};

Rey.prototype.plan=function(environment)
{
  this.actuator.commands=[];
  if (this.sensor.colision === false){
    if( Math.abs(x-X)<=10 && Math.abs(y-Y)<=10 ){ 
      if (x!==X && y!==Y && Math.abs(y-Y)===Math.abs(x-X))
        this.actuator.commands.push('goDiagonal');
      else if(x===X && y!==Y) 
        this.actuator.commands.push('goStraightY');
      else if(x!==X && y===Y)
        this.actuator.commands.push('goStraightX');
      else if(X===x&&Y===y)
      {
        this.actuator.commands.push('stop');
        seleccionF2=false;
        seleccionF1=false;
      }
    }
  }
};

function Reina(texturaP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.texturaP = texturaP;
  if(this.texturaP===true)
 this.actuator=new THREE.Mesh(new ReinaForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolGris.jpg")}));
  else
 this.actuator=new THREE.Mesh(new ReinaForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolBlanco.jpg")}));
 this.position.set=(x,y,0);
 this.sensor=new Sensor();  
 this.actuator.rotateX(Math.PI);
 this.add(this.actuator);
 this.actuator.castShadow=true;
}
Reina.prototype=new Agent();

Reina.prototype.sense=function(environment){
  if(X!==x&&Y===y){
    if (X<x)
      this.sensor.set(this.position, new THREE.Vector3(1, 0, 0));
    else
      this.sensor.set(this.position, new THREE.Vector3(-1, 0, 0));
  }
  else if(Y!==y&&X===x){
    if (Y<y)
      this.sensor.set(this.position, new THREE.Vector3(0, 1, 0));
    else
      this.sensor.set(this.position, new THREE.Vector3(0, -1, 0));
  }
  else if(Y!==y&&X!==x&&Math.abs(y-Y)===Math.abs(x-X)){
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
  if( obstaculo.length>0 && obstaculo[0].object.parent.texturaP !== this.texturaP ){
    if ( Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2))<=(obstaculo[0].distance+10*Math.sqrt(2)) ){
      this.sensor.colision=false;
      if (obstaculo[0].distance<=Math.sqrt(2))
        if (this.texturaP === true){
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
  else if ( obstaculo.length>0 && obstaculo[0].object.parent.texturaP === this.texturaP  ){
    if( obstaculo[0].distance<Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2)) )
      this.sensor.colision=true;  
  }
  else
    this.sensor.colision=false;
};

Reina.prototype.plan=function(environment)
{
  this.actuator.commands=[]; 
  if (this.sensor.colision === false){  
    if(X!==x&&Y===y)
      this.actuator.commands.push('goStraightX');
    else if(Y!==y&&X===x) 
      this.actuator.commands.push('goStraightY');
    else if(Y!==y&&X!==x&&Math.abs(y-Y)===Math.abs(x-X))
      this.actuator.commands.push('goDiagonal');
    else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
    }
  }
};

function Torre(texturaP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.texturaP = texturaP;
  if(this.texturaP===true)
 this.actuator=new THREE.Mesh(new TorreForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolGris.jpg")}));
  else
 this.actuator=new THREE.Mesh(new TorreForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolBlanco.jpg")}));
 this.position.set=(x,y,0);
 this.sensor=new Sensor();  
 this.actuator.rotateX(Math.PI);
 this.add(this.actuator);
 this.actuator.castShadow=true;
}
Torre.prototype=new Agent();

Torre.prototype.sense=function(environment){
  if(X!==x&&Y===y){
    if (X<x)
      this.sensor.set(this.position, new THREE.Vector3(1, 0, 0));
    else
      this.sensor.set(this.position, new THREE.Vector3(-1, 0, 0));
  }
  else if(Y!==y&&X===x){
    if (Y<y)
      this.sensor.set(this.position, new THREE.Vector3(0, 1, 0));
    else
      this.sensor.set(this.position, new THREE.Vector3(0, -1, 0));
  }
  var obstaculo=this.sensor.intersectObjects(environment.children,true);
  if( obstaculo.length>0 && obstaculo[0].distance<Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2)) ){
    this.sensor.colision=true;
    obstaculo[0].object.material.color.setHex(0xff00ff);}
  else
    this.sensor.colision=false;
  if( obstaculo.length>0 && obstaculo[0].object.parent.texturaP !== this.texturaP ){
    if ( Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2))<=(obstaculo[0].distance+10*Math.sqrt(2)) ){
      this.sensor.colision=false;
      if (obstaculo[0].distance<=Math.sqrt(2))
        if (this.texturaP === true){
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
  else if ( obstaculo.length>0 && obstaculo[0].object.parent.texturaP === this.texturaP  ){
    if( obstaculo[0].distance<Math.sqrt(Math.pow(X-x,2)+Math.pow(Y-y,2)) )
      this.sensor.colision=true;  
  }
  else
    this.sensor.colision=false;
};

Torre.prototype.plan=function(environment)
{
  this.actuator.commands=[];
  if (this.sensor.colision === false){
    if(X!==x&&Y===y)
      this.actuator.commands.push('goStraightX');
     else if(Y!==y&&X===x) 
      this.actuator.commands.push('goStraightY');
     else if(X===x&&Y===y)
    {
      this.actuator.commands.push('stop');
      seleccionF2=false;
      seleccionF1=false;
    }
  }
};

function Caballo(texturaP,x,y)
{
  cargador=new THREE.TextureLoader();
  Agent.call(this,x,y);
  this.texturaP = texturaP;
  if(this.texturaP===true)
 this.actuator=new THREE.Mesh(new CaballoForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolGris.jpg")}));
  else
 this.actuator=new THREE.Mesh(new CaballoForma(),new THREE.MeshLambertMaterial({map:textura.load("MarmolBlanco.jpg")}));
 this.position.set=(x,y,0);
 this.sensor=new Sensor();  
 this.actuator.rotateX(Math.PI/2);
 this.add(this.actuator);
 this.actuator.castShadow=true;
}
Caballo.prototype=new Agent();

Caballo.prototype.sense=function(environment){
  if( x-X===-20 && y-Y===-10 )
     this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.atan(1/2)), Math.sin(Math.atan(1/2)), 0));
  else if( x-X===-20 && y-Y===10 )
    this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.atan(1/2)), -Math.sin(Math.atan(1/2)), 0));
  else if( x-X===20 && y-Y===-10 )
    this.sensor.set(this.position, new THREE.Vector3(-Math.cos(Math.atan(1/2)), Math.sin(Math.atan(1/2)), 0));
  else if( x-X===20 && y-Y===10 )
    this.sensor.set(this.position, new THREE.Vector3(-Math.cos(Math.atan(1/2)), -Math.sin(Math.atan(1/2)), 0));
  else if( x-X===-10 && y-Y===-20 )
    this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.atan(2)), Math.sin(Math.atan(2)), 0));
  else if( x-X===-10 && y-Y===20 )
    this.sensor.set(this.position, new THREE.Vector3(Math.cos(Math.atan(2)), -Math.sin(Math.atan(2)), 0));
  else if( x-X===10 && y-Y===-20 )
    this.sensor.set(this.position, new THREE.Vector3(-Math.cos(Math.atan(2)), Math.sin(Math.atan(2)), 0));
  else if( x-X===10 && y-Y===20 )
    this.sensor.set(this.position, new THREE.Vector3-(Math.cos(Math.atan(2)), -Math.sin(Math.atan(2)), 0));
  var obstaculo=this.sensor.intersectObjects(environment.children,true);    
  if( obstaculo.length>0 && obstaculo[0].object.parent.texturaP !== this.texturaP ){
    if ( obstaculo.distance===10*Math.sqrt(5) )
      this.ind=1;
  }
  else if ( obstaculo.length>0 && obstaculo[0].object.parent.texturaP === this.texturaP  ){
    if( obstaculo[0].distance===10*Math.sqrt(5) )
      this.ind=2;  
  }  
  
  switch (this.ind){
    case 1:
      this.sensor.colision=false;
      if (obstaculo[0].distance<=Math.sqrt(2)){
        if (this.texturaP === true){
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
    break;
    default:
      this.sensor.colision=true;
    break;
         }
};

Caballo.prototype.plan=function(environment)
{
  this.actuator.commands=[];
  if(this.sensor.colision === false){
    if( ((Math.abs(x-X)<=20 && Math.abs(y-Y)<=10) || (Math.abs(x-X)<=10 && Math.abs(y-Y)<=20)) && Math.abs(x-X)!==Math.abs(y-Y) ){
      if(X!==x&&Y!==y){
        this.actuator.commands.push('goStraightX');
        this.cnt = true;
      }
      else if (X===X&&Y!==y&&this.cnt===true)
        this.actuator.commands.push('goStraightY');
    }
    else if(X===x&&Y===y&&this.cnt===true)
      {
        this.actuator.commands.push('stop');
        this.cnt = false;
        this.ind = 0;
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
//environment.sense();
environment.plan();
environment.act();
 if(turno==false)
  {
    switch(id){
      case 114:
        X=environment.children[100].position.x;
        Y=environment.children[100].position.y;
        if(seleccionF2==true){
          environment.children[100].act();
          environment.children[100].sense(environment);}
      break;
      case 119:
        X=environment.children[101].position.x;
        Y=environment.children[101].position.y;
        if(seleccionF2==true){
          environment.children[101].act();
          environment.children[101].sense(environment);}
      break;
      case 123:
        X=environment.children[102].position.x;
        Y=environment.children[102].position.y;
        if(seleccionF2==true){
          environment.children[102].act();
          environment.children[102].sense(environment);}
      break;
      case 128:
        X=environment.children[103].position.x;
        Y=environment.children[103].position.y;
        if(seleccionF2==true){
          environment.children[103].act();
          environment.children[103].sense(environment);}
      break;
      case 133:
        X=environment.children[104].position.x;
        Y=environment.children[104].position.y;
        if(seleccionF2==true){
          environment.children[104].act();
          environment.children[104].sense(environment);}
      break;
      case 137:
        X=environment.children[105].position.x;
        Y=environment.children[105].position.y;
        if(seleccionF2==true){
          environment.children[105].act();
          environment.children[105].sense(environment);}
      break;
      case 142:
        X=environment.children[106].position.x;
        Y=environment.children[106].position.y;
        if(seleccionF2==true){
          environment.children[106].act();
          environment.children[106].sense(environment);}
      break;
      case 146:
        X=environment.children[107].position.x;
        Y=environment.children[107].position.y;
        if(seleccionF2==true){
          environment.children[107].act();
          environment.children[107].sense(environment);}
      break;
      case 150:
        X=environment.children[108].position.x;
        Y=environment.children[108].position.y;
        if(seleccionF2==true){
          environment.children[108].act();
          environment.children[108].sense(environment);}
      break;
      case 154:
        X=environment.children[109].position.x;
        Y=environment.children[109].position.y;
        if(seleccionF2==true){
          environment.children[109].act();
          environment.children[109].sense(environment);}
      break;
      case 158:
        X=environment.children[110].position.x;
        Y=environment.children[110].position.y;
        if(seleccionF2==true){
          environment.children[110].act();
          environment.children[110].sense(environment);}
      break;
      case 162:
        X=environment.children[111].position.x;
        Y=environment.children[111].position.y;
        if(seleccionF2==true){
          environment.children[111].act();
          environment.children[111].sense(environment);}
      break;
      case 166:
        X=environment.children[112].position.x;
        Y=environment.children[112].position.y;
        if(seleccionF2==true){
          environment.children[112].act();
          environment.children[112].sense(environment);}
      break;
      case 170:
        X=environment.children[113].position.x;
        Y=environment.children[113].position.y;
        if(seleccionF2==true){
          environment.children[113].act();
          environment.children[113].sense(environment);}
      break;
      case 174:
        X=environment.children[114].position.x;
        Y=environment.children[114].position.y;
        if(seleccionF2==true){
          environment.children[114].act();
          environment.children[114].sense(environment);}
      break;
      case 178:
        X=environment.children[115].position.x;
        Y=environment.children[115].position.y;
        if(seleccionF2==true){
          environment.children[115].act();
          environment.children[115].sense(environment);}
      break;
    }
  }
  else
  {
    switch(id){
      case 182:
        X=environment.children[116].position.x;
        Y=environment.children[116].position.y;
        if(seleccionF2==true){
          environment.children[116].act();
          environment.children[116].sense(environment);}
      break;
      case 186:
        X=environment.children[117].position.x;
        Y=environment.children[117].position.y;
        if(seleccionF2==true){
          environment.children[117].act();
          environment.children[117].sense(environment);}
      break;
      case 190:
        X=environment.children[118].position.x;
        Y=environment.children[118].position.y;
        if(seleccionF2==true){
          environment.children[118].act();
          environment.children[118].sense(environment);}
      break;
      case 194:
        X=environment.children[119].position.x;
        Y=environment.children[119].position.y;
        if(seleccionF2==true){
          environment.children[119].act();
          environment.children[119].sense(environment);}
      break;
      case 198:
        X=environment.children[120].position.x;
        Y=environment.children[120].position.y;
        if(seleccionF2==true){
          environment.children[120].act();
          environment.children[120].sense(environment);}
      break;
      case 202:
        X=environment.children[121].position.x;
        Y=environment.children[121].position.y;
        if(seleccionF2==true){
          environment.children[121].act();
          environment.children[121].sense(environment);}
      break;
      case 206:
        X=environment.children[122].position.x;
        Y=environment.children[122].position.y;
        if(seleccionF2==true){
          environment.children[122].act();
          environment.children[122].sense(environment);}
      break;
      case 210:
        X=environment.children[123].position.x;
        Y=environment.children[123].position.y;
        if(seleccionF2==true){
          environment.children[123].act();
          environment.children[123].sense(environment);}
      break;
      case 214:
        X=environment.children[124].position.x;
        Y=environment.children[124].position.y;
        if(seleccionF2==true){
          environment.children[124].act();
          environment.children[124].sense(environment);}
      break;
      case 219:
        X=environment.children[125].position.x;
        Y=environment.children[125].position.y;
        if(seleccionF2==true){
          environment.children[125].act();
          environment.children[125].sense(environment);}
      break;
      case 223:
        X=environment.children[126].position.x;
        Y=environment.children[126].position.y;
        if(seleccionF2==true){
          environment.children[126].act();
          environment.children[126].sense(environment);}
      break;
      case 228:
        X=environment.children[127].position.x;
        Y=environment.children[127].position.y;
        if(seleccionF2==true){
          environment.children[127].act();
          environment.children[127].sense(environment);}
      break;
      case 233:
        X=environment.children[128].position.x;
        Y=environment.children[128].position.y;
        if(seleccionF2==true){
          environment.children[128].act();
          environment.children[128].sense(environment);}
      break;
      case 237:
        X=environment.children[129].position.x;
        Y=environment.children[129].position.y;
        if(seleccionF2==true){
          environment.children[129].act();
          environment.children[129].sense(environment);}
      break;
      case 242:
        X=environment.children[130].position.x;
        Y=environment.children[130].position.y;
        if(seleccionF2==true){
          environment.children[130].act();
          environment.children[130].sense(environment);}
      break;
      case 246:
        X=environment.children[131].position.x;
        Y=environment.children[131].position.y;
        if(seleccionF2==true){
          environment.children[131].act();
          environment.children[131].sense(environment);}
      break;
    }
  }   
renderizador.render(environment,camara);
}

var environment, camara, renderizador, iluminacion, culo,bi=0,bj=0,nj=0,ni=0,turno=false,sTC,id,avance,seleccion,x,X,Y,Z,z,y,activar=false,seleccionO=true,seleccionF2=false,seleccionF1=false,xf,yf;

setup();
loop();


