

var AJEDREZ = new Object();
AJEDREZ.luzPuntual = new THREE.PointLight(0xFFFFFF);
AJEDREZ.luzPuntual.position.x = -120;
AJEDREZ.luzPuntual.position.y = -45;
AJEDREZ.luzPuntual.position.z = -45;
//
AJEDREZ.retrollamada = function (ajedrez){
var material = new THREE.MeshLambertMaterial({ map: ajedrez} );
AJEDREZ.malla = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), material);
AJEDREZ.casillaB = new Array();
for(var i=1; i<=32; i++){
AJEDREZ.casillaB[i] = AJEDREZ.malla;
//AJEDREZ.escena.add(AJEDREZ.casillaB[i]);
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
       AJEDREZ.escena.add(AJEDREZ.casillaB[b]);
       b=b+1;
      }
    }
    else
    {
      if(c%2==0)
      {
      AJEDREZ.casillaB[b].position.set((f*10),(c*10),0);
      AJEDREZ.escena.add(AJEDREZ.casillaB[b]);
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
  for(var x=1; x<=8; x++)
{
  for(var z=1; z<=8; z++)
  {
    if(x%2==0)
    {
      if(z%2==0)
      {
       AJEDREZ.casillaN[n].position.set((x*10),(z*10),0);
        AJEDREZ.escena.add(AJEDREZ.casillaN[n]);
       n=n+1;
      }
    }
    else
    {
      if(z%2==1)
      {
      AJEDREZ.casillaN[n].position.set((x*10),(z*10),0);
      AJEDREZ.escena.add(AJEDREZ.casillaN[n]);
      n=n+1;
      }
    }
  }
}
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
  cargador.load("MarmolBlanco.jpg", AJEDREZ.retrollamada);
var cargador1 = new THREE.TextureLoader();
  cargador1.load("MarmolGris.jpg", AJEDREZ.retrollamada1);
var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmolcafe.jpg", AJEDREZ.retrollamada2);

AJEDREZ.camara = new THREE.PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 100, 1000);
  
AJEDREZ.camara.position.z =-150;
AJEDREZ.camara.position.x =45;
AJEDREZ.camara.position.y =-45;
AJEDREZ.camara.lookAt(new THREE.Vector3(45,45,0));

var lienzo = document.getElementById("ejemplo-textura");
AJEDREZ.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
AJEDREZ.renderizador.setSize(600, 600);
AJEDREZ.escena.add(AJEDREZ.luzPuntual);
}

AJEDREZ.loop = function(){
requestAnimationFrame(AJEDREZ.loop);
  for (var j=1;j<=32;j++){
if (AJEDREZ.malla !== undefined && AJEDREZ.malla2 !==undefined)
{
  AJEDREZ.renderizador.render(AJEDREZ.escena, AJEDREZ.camara);
}
    else
     AJEDREZ.setup(); 
}
}
AJEDREZ.loop();


