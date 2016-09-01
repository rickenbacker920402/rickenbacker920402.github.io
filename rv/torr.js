var base CircleGeometry(7,32);
var base2 CircleGeometry(5,32);






var torreForma = new THREE.Geometry();

torreForma.merge(base.geometry,base.matrix);
torreForma.merge(base2.geometry,base2.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma,material);

var escena = new THREE.Scene();
escena.add(torreMalla);
var camara = new THREE.PerspectiveCamera();
camara.position.z=5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
