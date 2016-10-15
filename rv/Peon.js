var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25);
var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );

base2.rotateX(Math.PI/2);
base.translate(0, -1, 0);
base2.translate(0, -0.9, 0);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);

var peonForma = new THREE.Geometry();

peonForma.merge(baseMalla.geometry,baseMalla.matrix);
peonForma.merge(base2Malla.geometry,base2Malla.matrix);

var material = new THREE.MeshNormalMaterial();
var peonMalla = new THREE.Mesh(peonForma,material);
peonMalla.rotateX(Math.PI/8);

var escena = new THREE.Scene();
escena.add(peonMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*1.2,window.innerHeight*1.5);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
