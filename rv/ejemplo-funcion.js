function init(p){
malla = new THREE.Mesh(new THREE.BoxGeometry(p,p,p), new THREE.MeshNormalMaterial());
escena = new THREE.Scene();
escena.add(malla);
camara = new THREE.PerspectiveCamera();
camara.position.z=5*p;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700,700);
document.body.appendChild(renderizador.domElement);

}
var loop = function(){
  requestAnimationFrame(loop);
//var main = function(p){......1
//  p(1);......2
renderizador.render(escena, camara);
malla.rotateY(0.01);
}
var escena,camara,renderizador;
//init(1);.......1
//main(2);.......1
//main(init);.......2
init(1);
loop();
