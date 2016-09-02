var base = new THREE.CylinderGeometry(0.5,0.5,.7);
var base2 = new  THREE.CylinderGeometry(.35,.35,.2);
base2.translate(0,1,0);

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
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*1,window.innerHeight*1);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
