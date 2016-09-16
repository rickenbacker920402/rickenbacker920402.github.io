//Iluminacion
var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.z = -120;
iluminacion.position.x = -45;
iluminacion.position.y = -45;

var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth /-4;
camara.right = window.innerWidth /4;
camara.top = window.innerHeight /4;
camara.bottom = window.innerHeight /-4;
camara.near = 100;
camara.far = 1000;
camara.updateProjectionMatrix();

camara.position.z = -100;
camara.position.x = 45;
camara.position.y = -50;
camara.lookAt(new THREE.Vector3(45,45,0));


//Torre 1
var torreMalla = new THREE.Mesh(torreForma,material);
torreMalla.rotateX(Math.PI*3/2);
torreMalla.scale.set(5,5,7);
torreMalla.position.set(10,10,-10);

//Torre 2
var torreMalla1 = new THREE.Mesh(torreForma,material2);
torreMalla1.rotateX(Math.PI*3/2);
torreMalla1.scale.set(5,5,7);
torreMalla1.position.set(10,80,-10);

//Torre 3
var torreMalla2 = new THREE.Mesh(torreForma,material);
torreMalla2.rotateX(Math.PI*3/2);
torreMalla2.scale.set(5,5,7);
torreMalla2.position.set(80,10,-10);

//Torre 4
var torreMalla3 = new THREE.Mesh(torreForma,material2);
torreMalla3.rotateX(Math.PI*3/2);
torreMalla3.scale.set(5,5,7);
torreMalla3.position.set(80,80,-10);

//Tablero

var casillaBlanca = new Array();
var casillaNegra = new Array();

var box = new THREE.BoxGeometry( 10, 10, 10 ,10,10,10);
var mboxBlanca = new THREE.MeshLambertMaterial({color : 0x999a9b });
var mboxNegra =  new THREE.MeshLambertMaterial({color : 0x6b6b6b });
var bordeTablero = new THREE.BoxGeometry( 100, 100, 7,10,10,10 );
var mbTablero = new THREE.MeshLambertMaterial({color : 0x644703 });
var mallaTablero = new THREE.Mesh(bordeTablero, mbTablero);
mallaTablero.position.set(45,45,0);
var n=1;
var b=1;
var escena = new THREE.Scene();

for(var i=1; i<=32; i++){
casillaBlanca[i] = new THREE.Mesh(box, mboxBlanca);
casillaNegra[i] = new THREE.Mesh(box, mboxNegra);
}

for(var f=1; f<=8; f++)
{
  for(var c=1; c<=8; c++)
  {
    if(f%2==0)
    {
      if(c%2==0)
      {
       casillaNegra[n].position.set((f*10),(c*10),0);
       escena.add(casillaNegra[n]);
       casillaNegra[n].castShadow = true;
       casillaNegra[n].receiveShadow = true;
       n=n+1;
      }
      else
      {
       casillaBlanca[b].position.set((f*10),(c*10),0);
       escena.add(casillaBlanca[b]);
       casillaBlanca[b].castShadow = true;
       casillaBlanca[b].receiveShadow = true;
       b=b+1;
      }
    }
    else
    {
      if(c%2==0)
      {
      casillaBlanca[b].position.set((f*10),(c*10),0);
      escena.add(casillaBlanca[b]);
      casillaBlanca[b].castShadow = true;
      casillaBlanca[b].receiveShadow = true;
      b=b+1;
      }
      else
      {
      casillaNegra[n].position.set((f*10),(c*10),0);
      escena.add(casillaNegra[n]);
      casillaNegra[n].castShadow = true;
      casillaNegra[n].receiveShadow = true;
      n=n+1;
      }
    }
  }
}

escena.add(mallaTablero);
escena.add(torreMalla);
escena.add(torreMalla1);
escena.add(torreMalla2);
escena.add(torreMalla3);
escena.add(iluminacion);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight);
renderizador.shadowMapEnabled = true;
document.body.appendChild(renderizador.domElement);
mallaTablero.castShadow = true;
mallaTablero.receiveShadow = true;
torreMalla.castShadow = true;
torreMalla1.castShadow = true;
torreMalla2.castShadow = true;
torreMalla3.castShadow = true;
iluminacion.castShadow = true;
renderizador.render(escena, camara);
