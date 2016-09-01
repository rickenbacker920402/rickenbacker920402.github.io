var base = new THREE.CylinderGeometry(0.5,0.5,2);
var base2 = new  THREE.CylinderGeometry(.35,.35,.5);
base2.translate(0,7,0);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);







var torreForma = new THREE.Geometry();

torreForma.merge(baseMalla.geometry,baseMalla.matrix);
torreForma.merge(base2Malla.geometry,base2Malla.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma,material);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=16;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
