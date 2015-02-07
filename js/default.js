var camera, renderer, scene;
var meshArray = [];

window.onload = function () {
  Init();
  animate();
};

function Init() {
  LEIA.virtualScreen.Init();
  LEIA.physicalScreen.resolution = new THREE.Vector2(200, 150);
  scene = new THREE.Scene();

  //setup camera
  camera = new LeiaCamera({
    dCtoZDP: LEIA.virtualScreen.d,
    zdpNormal: LEIA.virtualScreen.normal,
    targetPosition: LEIA.virtualScreen.center
  });
  scene.add(camera);

  //setup rendering parameter
  renderer = new LeiaWebGLRenderer({
    antialias: true,
    renderMode: _renderMode,
    colorMode: _colorMode,
    devicePixelRatio: 1,
    messageFlag: _targetEnvironment
  });
  // renderer.shadowMapEnabled = true;
  //   renderer.shadowMapType = THREE.BasicShadowMap;
  Leia_addRender(renderer, {
    bFPSVisible: true
  });

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
      mesh.rotation.set(0, Math.PI / 2 * LEIA.time * 0.2, 0);
      break;
    case 'Cube':
    case 'SmallerSquares':
    case 'SmallestSquares':
    case 'clock':
    case 'music':
    case 'mail':
    case 'camera':
      mesh.rotation.set(0, Math.PI / 2 * LEIA.time * 0.2, 0);
      break;
    default:
      // curMeshGroup.rotation.set(0, 0, Math.PI / 2 * LEIA.time *0.2);
      //  curMeshGroup.rotation.set(0, Math.PI / 2 * LEIA.time *0.2, 0);
      break;
    }
  }
  renderer.Leia_render({
    scene: scene,
    camera: camera
  });
}

function addObjectsToScene() {
  //Add your objects here
  Leia_LoadSTLModel({
    path: 'resource/Cube.stl', //AppleLogo_1k
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
    path: 'resource/SmallerSquares.stl', //AppleLogo_1k
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
    path: 'resource/SmallestSquares.stl', //AppleLogo_1k
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
    path: 'resource/TheTip.stl', //AppleLogo_1k
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
    path: 'resource/camera2.stl', //AppleLogo_1k
    color: 0xff00ff
  }, function (mesh) {
    mesh.scale.set(15, 15, 15);
    mesh.position.set(0, 0, 15);
    mesh.rotation.set(0, -Math.PI, 0);
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
    path: 'resource/mail.stl', //AppleLogo_1k
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
    path: 'resource/music2.stl', //AppleLogo_1k
    color: 0xff00ff
  }, function (mesh) {
    mesh.scale.set(15, 15, 15);
    mesh.position.set(15, 0, 0);
    mesh.rotation.set(0, -Math.PI / 2, 0);
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
    path: 'resource/clock2.stl', //AppleLogo_1k
    color: 0xff00ff
  }, function (mesh) {
    mesh.scale.set(15, 15, 15);
    mesh.position.set(-15, 0, 0);
    mesh.rotation.set(0, Math.PI / 2, 0);
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
