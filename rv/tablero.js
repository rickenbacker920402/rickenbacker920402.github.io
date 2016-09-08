var tablero =  new Vector();
for(var i=0; i<=63; i++){
tablero[i]  = new THREE.BoxGeometry( 10, 10, 10 );
for(var f=0; f<=7; f+10){
for(var c=0; c<=70; c+10){
tablero.translate(f, c, 0);
}
}
}

var tableroMalla = new THREE.Mesh(tablero);



var tableroForma = new THREE.Geometry();

tableroForma.merge(tableroMalla.geometry,tableroMalla.matrix);


var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(tableroForma,material);
tableroMalla.rotateX(Math.PI/8);

var escena = new THREE.Scene();
escena.add(tableroMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=100;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*1.2,window.innerHeight*1.5);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
