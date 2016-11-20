

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
camara.position.z = 130;
camara.position.y = -90;
camara.lookAt(new THREE.Vector3(0,0,0));
renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight);
renderizador.shadowMapEnabled = true;
document.body.appendChild(renderizador.domElement);
 
iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.z = 120;
iluminacion.position.x = -45;
iluminacion.position.y = -45;
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

