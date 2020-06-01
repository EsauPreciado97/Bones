import * as THREE from './node_modules/three/src/Three.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from './node_modules/three/examples/jsm/loaders/DRACOLoader.js'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js'

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
var description


function drawSkull() {

    description = 
    '<h3>The Skull</h3><br> \
    <p>The human skull is the bony structure that forms the head in the human skeleton. It supports the structures of the face and forms a cavity for the brain.</p> \
    <p>The skull consists of three parts, the neurocranium, the sutures, and the facial skeleton (also called the membraneous viscerocranium). \
    The neurocranium (or braincase) forms the protective cranial cavity that surrounds and houses the brain and brainstem. The upper areas of the cranial bones form the calvaria (skullcap). The membranous viscerocranium includes the mandible.</p> \
    <p>The sutures are fairly rigid joints between bones of the neurocranium.</p> \
    <p><strong>Bones</strong></p> \
    <p>Except for the mandible, all of the bones of the skull are joined together by sutures&mdash;synarthrodial (immovable) joints formed by bony ossification, with Sharpeys fibres permitting some flexibility.</p>\
    <p>The human skull is generally considered to consist of twenty-two bones, eight cranial bones and fourteen facial skeleton bones. In the neurocranium these are the occipital bone, two temporal bones, two parietal bones, the sphenoid, ethmoid and frontal bones.</p> \
    <p>The bones of the facial skeleton (14) are the vomer, two inferior nasal conchae, two nasal bones, two maxilla, the mandible, two palatine bones, two zygomatic bones, and two lacrimal bones.</p>'

    document.getElementById('description').innerHTML = description

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
            gltf.scene.position.set(0, 380, 0)
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

    description = 
    '<h3>The Thoracic Box</h3><br> \
    <p>The bones of the thorax, called the <em>thoracic skeleton</em> is a component of the axial skeleton.</p> \
    <p>It consists of the ribs and sternum. The ribs of the thorax are numbered in ascending order from 1-12. 11 and 12 are known as floating ribs because they have no anterior attachment point \
    in particular the cartilage attached to the sternum, as 1-7 are, and therefore are termed <em>floating</em>. Whereas ribs 8-10 are termed false ribs as their costal cartilage articulates with \
    the costal cartilage of the rib above.</p>'

    document.getElementById('description').innerHTML = description

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

    description = 
    '<h3>The Spine</h3><br> \
    <p>The vertebral column, also known as the backbone or spine, is part of the axial skeleton. The vertebral column is the defining characteristic of a vertebrate in which the notochord (a flexible rod of uniform composition) found in all chordates has been replaced by a segmented series of bone: vertebrae separated by intervertebral discs. The vertebral column houses the spinal canal, a cavity that encloses and protects the spinal cord.</p> \
    <p>In a humans vertebral column, there are normally thirty-three vertebrae; the upper twenty-four are articulating and separated from each other by intervertebral discs, and the lower nine are fused in adults, five in the sacrum and four in the coccyx, or tailbone. The articulating vertebrae are named according to their region of the spine. There are seven cervical vertebrae, twelve thoracic vertebrae and five lumbar vertebrae.</p> \
    <p>There are ligaments extending the length of the column at the front and the back, and in between the vertebrae joining the spinous processes, the transverse processes and the vertebral laminae.</p>'

    document.getElementById('description').innerHTML = description

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
            gltf.scene.position.set(0, -35, 0);


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

function drawSkeleton() {

    description = 
    '<h3>The Skeleton</h3><br> \
    <p>The skeleton consists of both fused and individual bones supported and supplemented by ligaments, tendons, muscles and cartilage. It serves as a scaffold which supports organs, anchors muscles, and protects organs such as the brain, lungs, heart and spinal cord. \
    Although the teeth do not consist of tissue commonly found in bones, the teeth are usually considered as members of the skeletal system.</p> \
    <p>The biggest bone in the body is the femur in the upper leg, and the smallest is the stapes bone in the middle ear. In an adult, the skeleton comprises around 14% of the total body weight, and half of this weight is water.</p> \
    <p>There are 206 bones in the adult human skeleton</p> \
    <p>The human skeleton takes 20 years before it is fully developed, and the bones contain marrow, which produces blood cells.</p> \
    <p>There exist several general differences between the male and female skeletons. The male skeleton, for example, is generally larger and heavier than the female skeleton.</p>'

    document.getElementById('description').innerHTML = description

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
        
        './assets/models/skeleton/scene.gltf',

        function( gltf ) {

            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;

            gltf.scene.scale.set(1.3, 1.3, 1.3);
            //gltf.scene.position.setX(-200)
            gltf.scene.position.setY(1.6)

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

    camera.position.z = 5;


    animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };

    animate();

}

function drawMouse() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 5000 );
    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});


    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    hlight = new THREE.AmbientLight (0x404040, 10);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,10);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light = new THREE.PointLight(0xc4c4c4,.1);
    light.position.set(0,100,1000);
    scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4,1);
    light2.position.set(5000,100,-100);
    scene.add(light2);

    light3 = new THREE.PointLight(0xc4c4c4,.5);
    light3.position.set(0,-100,-1000);
    scene.add(light3);

    light4 = new THREE.PointLight(0xc4c4c4,.5);
    light4.position.set(-5000,100,100);
    scene.add(light4);

    light5 = new THREE.PointLight(0xc4c4c4,.5);
    light4.position.set(0,-5000,100);
    scene.add(light5);

    loader = new GLTFLoader();

    dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./node_modules/three/examples/js/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );

    loader.load(
        
        './assets/models/mouse/scene.gltf',

        function( gltf ) {

            gltf.animations;
            gltf.scene;
            gltf.scenes;
            gltf.cameras;
            gltf.asset;

            gltf.scene.rotateX(89.8)

            gltf.scene.position.set(0, 30, 0)
            scene.add( gltf.scene );

        },

        function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

        },
    
        function ( error ) {

            console.log( 'An error happened' );

        }
    );

        camera.position.z = 1000;

        animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
    };

    animate();

}

export { drawSkull, drawThoracic, drawSpine, drawSkeleton, drawMouse };