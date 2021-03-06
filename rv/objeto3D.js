function Pieza(){
  
THREE.Object3D.call(this);
this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  
this.add(this.piernaIzq, this.piernaDer, cuerpo);
this.piernaIzq.position.z = -2.5;
this.piernaIzq.position.y = -5;
this.piernaIzq.position.x = 2.5;
this.piernaDer.position.z = 7;
this.piernaDer.position.y =-5;
this.piernaDer.position.x =2.5;

cuerpo.position.z = 2.5;
  
}
var pieza,camara, escena;
Pieza.prototype = new THREE.Object3D;

function setup(){
pieza = new Pieza();
camara = new THREE.PerspectiveCamera();
camara.position.z = 20;

var lienzo = document.getElementById("ejemplo-3d");
renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
renderizador.setSize(600,600);

escena = new THREE.Scene();
escena.add(pieza);
}
function loop(){
requestAnimationFrame(loop);
pieza.rotateY(0.01);
pieza.piernaIzq.rotateZ(0.01);
renderizador.render(escena,camara);
}

setup();
loop();
