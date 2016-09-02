var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2);
var base2 = new THREE.TorusGeometry( 0.46, 0.2, 16, 100 );
var base3 = new  THREE.CylinderGeometry(0.4, 0.6, 1.5);

base2.rotateX(Math.PI/2);

base2.translate(0, 0.1, 0);
base3.translate(0, 1, 0);

var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);
var base3Malla = new THREE.Mesh(base3);






var torreForma = new THREE.Geometry();

torreForma.merge(baseMalla.geometry,baseMalla.matrix);
torreForma.merge(base2Malla.geometry,base2Malla.matrix);
torreForma.merge(base3Malla.geometry,base3Malla.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma,material);
torreMalla.rotateX( Math.PI/4);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*1.2,window.innerHeight*1.2);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
