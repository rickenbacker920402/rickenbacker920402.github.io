
var anillo = new THREE.RingGeometry( 0.7, 1, 30, 30 );
figura = forma.clone();


var forma = new THREE.ExtrudeGeometry( figura, {amount: 10});
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/4);
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement);
renderizador.render( escena, camara);
