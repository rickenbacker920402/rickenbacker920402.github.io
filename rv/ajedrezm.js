Caballo = function(){
 THREE.Geometry.call(this);
}

Caballo.prototype = new THREE.Geometry();

Alfil =function(){
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
this.rotateX(Math.PI*3/2);
this.scale(5,5,7);
}

Alfil.prototype = new THREE.Geometry();

Rey = function(){
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
 this.rotateX(Math.PI*3/2);
this.scale(5,5,7);
}

Rey.prototype = new THREE.Geometry();

Reina = function(){
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

Reina.prototype = new THREE.Geometry();

Torre = function(){
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

Torre.prototype = new THREE.Geometry();

Peon = function(){
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

Peon.prototype = new THREE.Geometry();


function Agent(x=0,  y=0){
THREE.Object3D.call(this);
this.position.x = x;
this.position.y = y;
}

Agent.prototype = new THREE.Object3D();
Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

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
this.position.z = 0;
}
Borde.prototype = new THREE.Mesh();

function EspacioGris(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10), new THREE.MeshLambertMaterial({map: textura.load("MarmolGris.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = 0;
}
EspacioGris.prototype = new THREE.Mesh();

function EspacioBlanco(size, x, y){
var textura = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, 10), new THREE.MeshLambertMaterial({map: textura.load("MarmolBlanco.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = 0;
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


function setup(){

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

environment = new Environment();
environment.setMap( mapa );
 
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

var environment, camara, renderizador, iluminacion;

setup();
loop();

