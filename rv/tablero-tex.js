var luzPuntual = new THREE.PointLight(0xFFFFFF);
luzPuntual.position.x = -120;
luzPuntual.position.y = -45;
luzPuntual.position.z = -45;

var AJEDREZ = new Object();
//
AJEDREZ.retrollamada = function (ajedrez){
var material = new THREE.MeshLambertMaterial({ map: ajedrez} );
AJEDREZ.malla = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), material);
AJEDREZ.casillaB = new Array();
for(var i=1; i<=32; i++){
AJEDREZ.casillaB[i] = AJEDREZ.malla;
AJEDREZ.escena.add(AJEDREZ.casillaB[i]);
}
  b=1;
 for(var f=1; f<=8; f++)
{
  for(var c=1; c<=8; c++)
  {
    if(f%2==0)
    {
      if(c%2==1)
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
    }
  }
}
 
  
}

AJEDREZ.retrollamada1 = function (ajedrez){
var material1 = new THREE.MeshLambertMaterial({ map: ajedrez} );
AJEDREZ.malla1 = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), material1);
AJEDREZ.casillaN = new Array();
for(var i=1; i<=32; i++){
AJEDREZ.casillaN[i] = AJEDREZ.malla1;
//AJEDREZ.escena.add(AJEDREZ.casillaN[i]);
}
  n=1;
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
    }
    else
    {
      if(c%2==1)
      {
      AJEDREZ.casillaN[n].position.set((f*10),(c*10),0);
      n=n+1;
      }
    }
  }
}
AJEDREZ.escena.add(AJEDREZ.casillaN);
}

AJEDREZ.retrollamada2 = function (ajedrez){
var material2 = new THREE.MeshLambertMaterial({ map: ajedrez} );
AJEDREZ.malla2 = new THREE.Mesh( new THREE.BoxGeometry(100,100,7,10,10,10), material2);
  AJEDREZ.malla2.position.set(45,45,0);
AJEDREZ.escena.add(AJEDREZ.malla2);
}

AJEDREZ.setup = function(){
AJEDREZ.escena = new THREE.Scene();

var cargador = new THREE.TextureLoader();
var cargador1 = new THREE.TextureLoader();
var cargador2 = new THREE.TextureLoader();
cargador.load("MarmolBlanco.jpg", AJEDREZ.retrollamada);
cargador.load("MarmolGris.jpg", AJEDREZ.retrollamada1);
cargador.load("marmolcafe.jpg", AJEDREZ.retrollamada2);

AJEDREZ.camara = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 100, 1000);
  
AJEDREZ.camara.position.z =-150;
AJEDREZ.camara.position.x =45;
AJEDREZ.camara.position.y =-45;
AJEDREZ.camara.lookAt(new THREE.Vector3(45,45,0));

var lienzo = document.getElementById("ejemplo-textura");
AJEDREZ.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
AJEDREZ.renderizador.setSize(600, 600);
}

AJEDREZ.loop = function(){
requestAnimationFrame(AJEDREZ.loop);

if (AJEDREZ.malla !== undefined) {
}
AJEDREZ.renderizador.render(AJEDREZ.escena, AJEDREZ.camara);
}

AJEDREZ.setup();
AJEDREZ.escena.add(luzPuntual);
AJEDREZ.loop();


