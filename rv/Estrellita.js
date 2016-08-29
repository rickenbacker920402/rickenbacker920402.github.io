var figura = new THREE.Shape();

figura.moveTo(0,400);
figura.lineTo(150,100);
figura.lineTo(500, 0);
figura.lineTo(250,-150);
figura.lineTo(300,-500);
figura.lineTo(0,-250);
figura.lineTo(-300,-500);
figura.lineTo(-250,-150);
figura.lineTo(-500,0);
figura.lineTo(-150,100);
figura.lineTo(0,400);

var forma = new THREE.ExtrudeGeometry( figura, {amount: 50});
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
