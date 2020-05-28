import * as THREE from './node_modules/three/src/Three.js';
//import {OBJLoader2} from './node_modules/three/examples/jsm/loaders/OBJLoader2.js'
//import {MTLLoader} from './node_modules/three/examples/jsm/loaders/MTLLoader.js'
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {DRACOLoader} from './node_modules/three/examples/jsm/loaders/DRACOLoader.js'
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js'



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({canvas: canvas});

var controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', renderer);

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

var hlight = new THREE.AmbientLight (0x404040, 5);
scene.add(hlight);

/*var directionalLight = new THREE.DirectionalLight(0xffffff,100);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

var light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);

var light2 = new THREE.PointLight(0xc4c4c4,10);
light2.position.set(500,100,0);
scene.add(light2);
var light3 = new THREE.PointLight(0xc4c4c4,10);
light3.position.set(0,100,-500);
scene.add(light3);

var light4 = new THREE.PointLight(0xc4c4c4,10);
light4.position.set(-500,300,500);
scene.add(light4);*/


/*const mtlLoader = new MTLLoader();

mtlLoader.load('./assets/models/skull.mtl', function(materials) {

    materials.preload();

    let loader = new OBJLoader2();
    loader.setMaterials(materials);
    
    loader.load('./assets/models/skull.obj', callbackOnLoad, null, null, null);


});

function callbackOnLoad( object3d ) {
    scene.add(  object3d );
}*/

var loader = new GLTFLoader();

var dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./node_modules/three/examples/js/libs/draco/' );
loader.setDRACOLoader( dracoLoader );

loader.load(
    
    './assets/models/human/scene.gltf',

    function( gltf ) {

 
        scene.add( gltf.scene );

        gltf.animations;
        gltf.scene;
        gltf.scenes;
        gltf.cameras;
        gltf.asset;
        
    },

    function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

    camera.position.z = 2;

var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();