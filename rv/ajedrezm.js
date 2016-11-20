

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

function Borde(size, x, y, textura){
var textura1 = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshBasicMaterial({map: textura1.load("marmolcafe.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = 0;
}
Borde.prototype = new THREE.Mesh();

function EspacioGris(size, x, y){
var textura2 = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshBasicMaterial({map: textura2.load("MarmolGris.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = 0;
}
EspacioGris.prototype = new THREE.Mesh();

function EspacioBlanco(size, x, y){
var textura3 = new THREE.TextureLoader();
THREE.Mesh.call(this, new THREE.BoxGeometry(size, size, size), new THREE.MeshBasicMaterial({map: textura3.load("MarmolBlanco.jpg")}));
this.size = size;
this.position.x = x;
this.position.y = y;
this.position.z = 0;
}
EspacioBlanco.prototype = new THREE.Mesh();

Environment.prototype.setMap = function(map){
var _offset = 10;

for (var i= 0; i< map.length ; i++){
for (var j= 0; j < map.length; j++){
if (map[i][j] === "x")
this.add(new Borde(10, j * _offset, (i*_offset)));
else if (map[i][j] === "y")
this.add( new EspacioGris(10, j - _offset, -(i - _offset)));
 else if (map[i][j] === "z")
this.add( new EspacioBlanco(10, j - _offset, -(i - _offset)));
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

camera = new THREE.PerspectiveCamera();
camera.position.z = 30;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

environment.add(camera);
}

function loop(){
requestAnimationFrame(loop);
environment.sense();
environment.plan();
environment.act();

renderer.render( environment,camera);
}
var environment, camera, renderer;
setup();
loop();

