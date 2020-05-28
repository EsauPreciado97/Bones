import * as THREE from './node_modules/three/src/Three.js';
//import {OBJLoader2} from './node_modules/three/examples/jsm/loaders/OBJLoader2.js'
//import {MTLLoader} from './node_modules/three/examples/jsm/loaders/MTLLoader.js'
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {DRACOLoader} from './node_modules/three/examples/jsm/loaders/DRACOLoader.js'
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js'



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});


//scene.background = new THREE.Color(0xdddddd);

var controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', renderer);

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

var hlight = new THREE.AmbientLight (0x404040, .5);
scene.add(hlight);

var directionalLight = new THREE.DirectionalLight(0xffffff,1);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

var light = new THREE.PointLight(0xc4c4c4,.5);
light.position.set(0,100,5000);
scene.add(light);

var light2 = new THREE.PointLight(0xc4c4c4,.3);
light2.position.set(5000,100,-100);
scene.add(light2);

var light3 = new THREE.PointLight(0xc4c4c4,.3);
light3.position.set(0,-100,-5000);
scene.add(light3);

var light4 = new THREE.PointLight(0xc4c4c4,.3);
light4.position.set(-5000,100,100);
scene.add(light4);

var loader = new GLTFLoader();

var dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('./node_modules/three/examples/js/libs/draco/' );
loader.setDRACOLoader( dracoLoader );

loader.load(
    
    './assets/models/skull/scene.gltf',

    function( gltf ) {

 
        
        gltf.animations;
        gltf.scene;
        gltf.scenes;
        gltf.cameras;
        gltf.asset;

        gltf.scene.scale.set(.2, .2, .2);

        scene.add( gltf.scene );

        
    },

    function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);

    camera.position.z = 3000;


var animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();