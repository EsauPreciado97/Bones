import * as THREE from './node_modules/three/src/Three.js';
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import {DRACOLoader} from './node_modules/three/examples/jsm/loaders/DRACOLoader.js'
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js'

// DECLARE ALL VARIABLES:

var scene
var camera
var renderer
var controls
var hlight
var directionalLight
var light
var light2, light3, light4, light5
var loader
var dracoLoader
var animate


function drawSkull() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});


    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    hlight = new THREE.AmbientLight (0x404040, .5);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light = new THREE.PointLight(0xc4c4c4,.5);
    light.position.set(0,100,5000);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4,.3);
    light2.position.set(5000,100,-100);
    scene.add(light2);

    light3 = new THREE.PointLight(0xc4c4c4,.3);
    light3.position.set(0,-100,-5000);
    scene.add(light3);

    light4 = new THREE.PointLight(0xc4c4c4,.3);
    light4.position.set(-5000,100,100);
    scene.add(light4);

    light5 = new THREE.PointLight(0xc4c4c4,.3);
    light4.position.set(0,-5000,100);
    scene.add(light5);

    loader = new GLTFLoader();

    dracoLoader = new DRACOLoader();
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
    
        function ( error ) {

            console.log( 'An error happened' );

        }
    );

        camera.position.z = 3000;

        animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };

    animate();

}

function drawThoracic() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});


    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    hlight = new THREE.AmbientLight (0x404040, 2.5);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light = new THREE.PointLight(0xc4c4c4,.5);
    light.position.set(0,100,5000);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4,.3);
    light2.position.set(5000,100,-100);
    scene.add(light2);

    light3 = new THREE.PointLight(0xc4c4c4,.3);
    light3.position.set(0,-100,-5000);
    scene.add(light3);

    light4 = new THREE.PointLight(0xc4c4c4,.3);
    light4.position.set(-5000,100,100);
    scene.add(light4);

    light5 = new THREE.PointLight(0xc4c4c4,.3);
    light4.position.set(0,-5000,100);
    scene.add(light5);

    loader = new GLTFLoader();

    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./node_modules/three/examples/js/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );

    loader.load(
        
        './assets/models/thoracic_box/scene.gltf',

        function( gltf ) {

            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;

            //gltf.scene.scale.set(.2, .2, .2);
            gltf.scene.position.setX(-200)
            gltf.scene.position.setY(300)

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

    camera.position.z = 800;


    animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };

    animate();

}

function drawSpine() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 5000 );
    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    hlight = new THREE.AmbientLight (0x404040, .5);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light = new THREE.PointLight(0xc4c4c4,.5);
    light.position.set(0,100,5000);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4,.3);
    light2.position.set(5000,100,-100);
    scene.add(light2);

    light3 = new THREE.PointLight(0xc4c4c4,.3);
    light3.position.set(0,-100,-5000);
    scene.add(light3);

    light4 = new THREE.PointLight(0xc4c4c4,.3);
    light4.position.set(-5000,100,100);
    scene.add(light4);

    light5 = new THREE.PointLight(0xc4c4c4,.3);
    light4.position.set(0,-5000,100);
    scene.add(light5);

    loader = new GLTFLoader();

    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./node_modules/three/examples/js/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );

    loader.load(
        
        './assets/models/spine/scene.gltf',

        function( gltf ) {

            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;

            gltf.scene.scale.set(2, 2, 2);
            gltf.scene.position.set(0, -30, 0);


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

    camera.position.z = 70;


    animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };

    animate();

}

export { drawSkull, drawThoracic, drawSpine };