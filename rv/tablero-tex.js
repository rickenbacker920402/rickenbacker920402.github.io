var AJEDREZ = new Object();

AJEDEREZ.retrollamada = function (ajedrez){
var material = new THREE.MeshLambertMaterial({ map: ajedrez} );
AJEDREZ.malla = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), material);
AJEDREZ.casillaB = new Array();
for(var i=1; i<=32; i++){
AJEDREZ.casillaB[i] = AJEDREZ.malla;
AJEDREZ.escena.add(AJEDREZ.casillaB[i]);
}
}

AJEDEREZ.retrollamada1 = function (ajedrez){
var material1 = new THREE.MeshLambertMaterial({ map: ajedrez} );
AJEDREZ.malla1 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), material1);
AJEDREZ.casillaN = new Array();
for(var i=1; i<=32; i++){
AJEDREZ.casillaN[i] = AJEDREZ.malla1;
AJEDREZ.escena.add(AJEDREZ.casillaN[i]);
}
}

AJEDEREZ.retrollamada2 = function (ajedrez){
var material2 = new THREE.MeshLambertMaterial({ map: ajedrez} );
AJEDREZ.malla2 = new THREE.Mesh( new THREE.BoxGeometry(100,100,7,10,10,10), material2);
AJEDREZ.escena.add(AJEDREZ.malla2);
}

AJEDREZ.posicion = function(){
var n=1;
var b=1;
AJEDREZ.malla2.position.set(45,45,0);

for(var f=1; f<=8; f++)
{
  for(var c=1; c<=8; c++)
  {
    if(f%2==0)
    {
      if(c%2==0)
      {
       AJEDREZ.casillaN[n].position.set((f*10),(c*10),0);
       n=n+1;
      }
      else
      {
       AJEDREZ.casillaB[b].position.set((f*10),(c*10),0);
       b=b+1;
      }
    }
    else
    {
      if(c%2==0)
      {
      AJEDREZ.casillaB[b].position.set((f*10),(c*10),0);
      b=b+1;
      }
      else
      {
      AJEDREZ.casillaN[n].position.set((f*10),(c*10),0);
      n=n+1;
      }
    }
  }
}

}





AJEDREZ.setup = function(){
AJEDREZ.escena = new THREE.Scene();

var cargador = new THREE.TextureLoader();
var cargador1 = new THREE.TextureLoader();
var cargador2 = new THREE.TextureLoader();
cargador.load("MarmolBlanco.jpg", AJEDREZ.retrollamada);
cargador.load("MarmolGris.jpg", AJEDREZ.retrollamada1);
cargador.load("marmolcafe.jpg", AJEDREZ.retrollamada2);

AJEDREZ.camara = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);
AJEDREZ.camara.position.z =100;

var lienzo = document.getElementById("ejemplo-textura");
AJEDREZ.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
AJEDREZ.renderizador.setSize(600, 600);
}

AJEDREZ.loop = function(){
requestAnimationFrame(TEXTURA.loop);

if (TEXTURA.malla !== undefined) {
AJEDREZ.malla.rotateX(0.01);
AJEDREZ.malla.rotateY(0.01);
}
AJEDREZ.renderizador.render(TEXTURA.escena, TEXTURA.camara);
}

AJEDREZ.setup();
AJEDREZ.posicion();
AJEDREZ.loop();


