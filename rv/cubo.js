var forma = new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 1, 1, 1 ) );
forma.vertices.push( new THREE.Vector3( 1, -1, 1 ) );
forma.vertices.push( new THREE.Vector3( -1, -1, 1 ) );
forma.vertices.push( new THREE.Vector3( -1, 1, 1 ) );
forma.vertices.push( new THREE.Vector3( -1, 1, -1 ) );
forma.vertices.push( new THREE.Vector3( -1, -1, -1 ) );
forma.vertices.push( new THREE.Vector3( 1, -1, -1) );
forma.vertices.push( new THREE.Vector3( 1, 1, -1 ) );

forma.faces.push( new THREE.Face3( 0, 1, 2) );
forma.faces.push( new THREE.Face3( 2, 0, 3) );
forma.faces.push( new THREE.Face3( 3, 2, 5) );
forma.faces.push( new THREE.Face3( 5, 4, 3) );
forma.faces.push( new THREE.Face3( 3, 0, 7) );
forma.faces.push( new THREE.Face3( 7, 3, 4) );
forma.faces.push( new THREE.Face3( 4, 7, 6) );
forma.faces.push( new THREE.Face3( 6, 4, 5) );
forma.faces.push( new THREE.Face3( 5, 2, 1) );
forma.faces.push( new THREE.Face3( 1, 5, 6) );
forma.faces.push( new THREE.Face3( 6, 7, 0) );
forma.faces.push( new THREE.Face3( 0, 6, 1) );

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
malla.rotateY(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z = 10;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
