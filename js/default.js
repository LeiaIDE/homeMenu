var camera, renderer, scene;
var meshArray = [];

head.ready(function() {
    Init();
    animate();
});

function Init() {
    scene = new THREE.Scene();

    //setup camera
    camera = new LeiaCamera({
        cameraPosition: new THREE.Vector3(_camPosition.x, _camPosition.y, _camPosition.z),
        targetPosition: new THREE.Vector3(_tarPosition.x, _tarPosition.y, _tarPosition.z)
    });
    scene.add(camera);

    //setup rendering parameter
    renderer = new LeiaWebGLRenderer({
        antialias: true,
        renderMode: _renderMode,
        shaderMode: _nShaderMode,
        colorMode: _colorMode,
        compFac: _depthCompressionFactor,
        devicePixelRatio: 1
    });
   // renderer.shadowMapEnabled = true;
  //  renderer.shadowMapType = THREE.BasicShadowMap;
    Leia_addRender(renderer,{bFPSVisible:true});

    //add object to Scene
    addObjectsToScene();

    //add Light
    addLights();

    //add Gyro Monitor
    //addGyroMonitor();
}

function animate() {
    requestAnimationFrame(animate);

    //set mesh animation
   for (var i = 0; i < meshArray.length; i++) {
         var mesh = meshArray[i].mesh;
         switch (meshArray[i].name) {
             case 'TheTip':
               //  curMeshGroup.rotation.set(0, 0, Math.PI / 2 * LEIA.time);
              mesh.rotation.set(0, Math.PI / 2 * LEIA.time *0.2, 0);
                 break;
			  case 'Cube':
			  case 'SmallerSquares':
			  case 'SmallestSquares':
			  case 'clock':
			  case 'music':
			  case 'mail':
			  case 'camera':
			  mesh.rotation.set(0, Math.PI / 2 * LEIA.time *0.2, 0);
			break;
             default:
                // curMeshGroup.rotation.set(0, 0, Math.PI / 2 * LEIA.time *0.2);
            //  curMeshGroup.rotation.set(0, Math.PI / 2 * LEIA.time *0.2, 0);
                 break;
         }
     }
    renderer.Leia_render({
        scene: scene,
        camera: camera,
        holoScreenSize: _holoScreenSize,
        holoCamFov: _camFov,
        upclip: _up,
        downclip: _down,
        filterA: _filterA,
        filterB: _filterB,
        filterC: _filterC,
        messageFlag: _messageFlag
    });
}

function addObjectsToScene() {
    //Add your objects here
    Leia_LoadSTLModel({
        path: 'resource/Cube.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(30, 30, 30);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "Cube"
        });
    });
	
	Leia_LoadSTLModel({
        path: 'resource/SmallerSquares.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(30, 30, 30);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "SmallerSquares"
        });
    });
	
	Leia_LoadSTLModel({
        path: 'resource/SmallestSquares.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(30, 35, 30);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "SmallestSquares"
        });
    });
	
	Leia_LoadSTLModel({
        path: 'resource/TheTip.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(5, 5, 5);
		mesh.position.set(0, 22, 0);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "TheTip"
        });
    });
	
	Leia_LoadSTLModel({
        path: 'resource/camera.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(15, 15, 15);
		mesh.position.set(0, 0, 15);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "camera"
        });
    });
	
	Leia_LoadSTLModel({
        path: 'resource/mail.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(15, 15, 15);
		mesh.position.set(0, 0, -15);
		mesh.rotation.set(0, -Math.PI, 0);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "mail"
        });
    });
	
	Leia_LoadSTLModel({
        path: 'resource/music.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(15, 15, 15);
		mesh.position.set(15, 0, 0);
		mesh.rotation.set(0, -Math.PI/2, 0);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "music"
        });
    });
	
	Leia_LoadSTLModel({
        path: 'resource/clock.stl',  //AppleLogo_1k
		color: 0xff00ff
    }, function (mesh) {
        mesh.scale.set(15, 15, 15);
		mesh.position.set(-15, 0, 0);
		mesh.rotation.set(0, Math.PI/2, 0);
		mesh.castShadow = true;
		mesh.material.side = THREE.DoubleSide;
		var group = new THREE.Object3D();
        group.add(mesh);
        scene.add(group);
       // scene.add(mesh);
        meshArray.push({
            mesh: group,
            name: "clock"
        });
    });
  
   var backgroundPlane = Leia_createTexturePlane({
        filename: 'resource/world-map-background2.jpg',
        width: 100,
        height: 75
    });
    backgroundPlane.position.z = -20;
    backgroundPlane.castShadow = false;
    backgroundPlane.receiveShadow = true;
    scene.add(backgroundPlane);
}

function createText(parameters) {
    parameters = parameters || {};
    var strText = parameters.text;
    var size = parameters.size;
    var menuGeometry = new THREE.TextGeometry(
        strText, {
            size: size,
            height: 2,
            curveSegments: 4,
            font: "helvetiker",
            weight: "normal",
            style: "normal",
            bevelThickness: 0.6,
            bevelSize: 0.25,
            bevelEnabled: true,
            material: 0,
            extrudeMaterial: 1
        }
    );
    var menuMaterial = new THREE.MeshFaceMaterial(
        [
            new THREE.MeshLambertMaterial({
                color: 0xffffff,
                shading: THREE.FlatShading
            }), // front
            new THREE.MeshLambertMaterial({
                color: 0xffffff,
                shading: THREE.SmoothShading
            }) // side
        ]
    );
    var menuMesh = new THREE.Mesh(menuGeometry, menuMaterial);
    return menuMesh;
}

function addLights() {
    //Add Lights Here
    var light = new THREE.SpotLight(0xffffff);
    light.position.set(0, 60, 60);
    light.shadowCameraVisible = false;
    light.castShadow = true;
    light.shadowMapWidth = light.shadowMapHeight = 256;
    light.shadowDarkness = 0.7;
    scene.add(light);

    var ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
}