
var AJEDREZ = new Object();
AJEDREZ.luzPuntual = new THREE.PointLight(0xFFFFFF);
AJEDREZ.luzPuntual.position.x = -120;
AJEDREZ.luzPuntual.position.y = -45;
AJEDREZ.luzPuntual.position.z = -45;

//Torre Forma
var base = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 50, 25);
var base2 = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 );
var base3 = new  THREE.CylinderGeometry(0.35, 0.55, 1.5, 50, 25);
var cima = new THREE.TorusGeometry( 0.35, 0.1, 16, 100 );
var cima2 = new THREE.CylinderGeometry(0.55, 0.45, 0.2, 50, 25);
var punta = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var punta1 = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var punta2 = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var punta3 = new THREE.ConeGeometry( 0.15, 0.2, 32 );
var anillo = new THREE.TorusGeometry( 0.4, 0.1, 16, 100 );



base2.rotateX(Math.PI/2);
cima.rotateX(Math.PI/2);
anillo.rotateX(Math.PI/2);


base.translate(0, -1, 0);
base2.translate(0, -0.9, 0);
base3.translate(0, 0.05, 0);
cima.translate(0, 0.8, 0);
cima2.translate(0, 0.9, 0);
punta.translate(0, 1.1, 0.35);
punta1.translate(0, 1.1, -0.35);
punta2.translate(0.35, 1.1, 0);
punta3.translate(-0.35, 1.1, 0);
anillo.translate(0,-0.2, 0);


var baseMalla = new THREE.Mesh(base);
var base2Malla = new THREE.Mesh(base2);
var base3Malla = new THREE.Mesh(base3);
var cimaMalla = new THREE.Mesh(cima);
var cima2Malla = new THREE.Mesh(cima2);
var puntaMalla = new THREE.Mesh(punta);
var punta1Malla = new THREE.Mesh(punta1);
var punta2Malla = new THREE.Mesh(punta2);
var punta3Malla = new THREE.Mesh(punta3);
var anilloMalla = new THREE.Mesh(anillo);


var torreForma = new THREE.Geometry();

torreForma.merge(baseMalla.geometry,baseMalla.matrix);
torreForma.merge(base2Malla.geometry,base2Malla.matrix);
torreForma.merge(base3Malla.geometry,base3Malla.matrix);
torreForma.merge(cimaMalla.geometry,cimaMalla.matrix);
torreForma.merge(cima2Malla.geometry,cima2Malla.matrix);
torreForma.merge(puntaMalla.geometry,puntaMalla.matrix);
torreForma.merge(punta1Malla.geometry,punta1Malla.matrix);
torreForma.merge(punta2Malla.geometry,punta2Malla.matrix);
torreForma.merge(punta3Malla.geometry,punta3Malla.matrix);
torreForma.merge(anilloMalla.geometry,anilloMalla.matrix);


AJEDREZ.retrollamada = function (textura1){
material = new THREE.MeshLambertMaterial({ map: textura1} );
AJEDREZ.casillaB = new Array();
for(var i=1; i<=32; i++){
AJEDREZ.casillaB[i] = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), material);
AJEDREZ.casillaB[i].receiveShadow = true;
}
var  b=1;
 for(var f=1; f<=8; f++)
{
  for(var c=1; c<=8; c++)
  {
    if(f%2==0)
    {
      if(c%2==0){
       b=b;
      }
       else
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

AJEDREZ.retrollamada1 = function (textura2){
var material1 = new THREE.MeshLambertMaterial({ map: textura2} );
AJEDREZ.casillaN = new Array();
for(var i=1; i<=32; i++){
AJEDREZ.casillaN[i] = new THREE.Mesh( new THREE.BoxGeometry(10,10,10,10,10,10), material1);
AJEDREZ.casillaN[i].receiveShadow = true;
}
var  n=1;
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
      if(z%2==0){
       n=n
      }
       else
      {
      AJEDREZ.casillaN[n].position.set((x*10),(z*10),0);
     AJEDREZ.escena.add(AJEDREZ.casillaN[n]);
      n=n+1;
      }
    }
  }
}
}

AJEDREZ.retrollamada2 = function (textura3){
var material2 = new THREE.MeshLambertMaterial({ map: textura3} );
AJEDREZ.malla2 = new THREE.Mesh( new THREE.BoxGeometry(100,100,7,10,10,10), material2);
AJEDREZ.malla2.position.set(45,45,0);
AJEDREZ.escena.add(AJEDREZ.malla2);
 AJEDREZ.malla2.receiveShadow = true;
}

AJEDREZ.retrollamada3 = function (textura4){
var material3 = new THREE.MeshLambertMaterial({map : textura4});
 AJEDREZ.torreB = new Array();
 for (var i=1;i<=2;i++){
  AJEDREZ.torreB[i] = new THREE.Mesh( torreForma, material3);
  AJEDREZ.torreB[i].rotateX(Math.PI*3/2);
  AJEDREZ.torreB[i].scale.set(5,5,7);
  AJEDREZ.escena.add(AJEDREZ.torreB[i]); 
  AJEDREZ.torreB[i].castShadow = true;
  AJEDREZ.torreB[i].receiveShadow = true;
 }
 AJEDREZ.torreB[1].position.set(10,10,-10);
 AJEDREZ.torreB[2].position.set(10,80,-10);
}

AJEDREZ.retrollamada4 = function (textura5){
var material4 = new THREE.MeshLambertMaterial({map : textura5});
 AJEDREZ.torreN = new Array();
 for (var i=1;i<=2;i++){
  AJEDREZ.torreN[i] = new THREE.Mesh( torreForma, material4);
  AJEDREZ.torreN[i].rotateX(Math.PI*3/2)
  AJEDREZ.torreN[i].scale.set(5,5,7);
  AJEDREZ.escena.add(AJEDREZ.torreN[i]); 
  AJEDREZ.torreN[i].castShadow = true;
  AJEDREZ.torreN[i].receiveShadow = true;
 }
 AJEDREZ.torreN[1].position.set(80,10,-10);
 AJEDREZ.torreN[2].position.set(80,80,-10);
}

AJEDREZ.setup = function(){
AJEDREZ.escena = new THREE.Scene();

var cargador = new THREE.TextureLoader();
  cargador.load("MarmolBlanco.jpg", AJEDREZ.retrollamada);
var cargador1 = new THREE.TextureLoader();
  cargador1.load("MarmolGris.jpg", AJEDREZ.retrollamada1);
var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmolcafe.jpg", AJEDREZ.retrollamada2);
var cargador3 = new THREE.TextureLoader();
  cargador3.load("MarmolBlanco.jpg", AJEDREZ.retrollamada3);
var cargador4 = new THREE.TextureLoader();
  cargador4.load("MarmolGris.jpg", AJEDREZ.retrollamada4);

AJEDREZ.camara = new THREE.PerspectiveCamera( 45, window.innerWidth/ window.innerHeight, 100, 1000);
  
AJEDREZ.camara.position.z =-150;
AJEDREZ.camara.position.x =45;
AJEDREZ.camara.position.y =-45;
AJEDREZ.camara.lookAt(new THREE.Vector3(45,45,0));

var lienzo = document.getElementById("ejemplo-textura");
AJEDREZ.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
AJEDREZ.renderizador.setSize(600, 600);
AJEDREZ.escena.add(AJEDREZ.luzPuntual);
AJEDREZ.luzPuntual.castShadow = true;
}

AJEDREZ.loop = function(){
requestAnimationFrame(AJEDREZ.loop);
 for(var q=1;q<=32;q++){
if (AJEDREZ.casillaB[q] !== undefined && AJEDREZ.casillaN[q] !==undefined)
{
  AJEDREZ.renderizador.render(AJEDREZ.escena, AJEDREZ.camara);
}
 }
}
AJEDREZ.setup(); 
AJEDREZ.loop();


