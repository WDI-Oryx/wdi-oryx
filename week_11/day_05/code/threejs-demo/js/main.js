let count = 0;

function createRenderer() {
  // Create a WebGL Renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  // Once its created:
  //   Set the size
  renderer.setSize(window.innerWidth, window.innerHeight);
  //   Allow shadows
  renderer.shadowMap.enabled = true;
  //   Set the background color
  renderer.setClearColor("#f8f8ff");
  //   Change the pixel ratio
  renderer.setPixelRatio(window.devicePixelRatio);
  //   Add it to the page
  const output = document.querySelector("#output");
  output.appendChild(renderer.domElement);
  return renderer;
}

function createScene() {
  const scene = new THREE.Scene();
  return scene;
}

function createCamera() {
  const camera = new THREE.PerspectiveCamera(
    45, // Field of view
    window.innerWidth / window.innerHeight, // Ratio
    0.1, // Near
    1000 // Far
  );
  camera.position.x = -30;
  camera.position.y = 40;
  camera.position.z = 30;
  camera.lookAt(scene.position);
  return camera;
}

function createAxesHelper() {
  const axesHelper = new THREE.AxesHelper(40);
  return axesHelper;
}

function createFloor() {
  // Create a material
  const boxMat = new THREE.MeshLambertMaterial({
    color: "#CED3DC"
    // wireframe: true
  });
  // Create a geometry
  const boxGeo = new THREE.BoxGeometry(60, 0.1, 20);
  // Material + geometry = mesh
  const mesh = new THREE.Mesh(boxGeo, boxMat);
  mesh.position.x = 15;
  mesh.receiveShadow = true;
  return mesh;
}

function createCube(options) {
  const { width, height, depth, x, y, z } = options;
  // Create a material
  const cubeMat = new THREE.MeshLambertMaterial({
    color: "#A31621"
    // wireframe: true
  });
  // Create a geometry
  const cubeGeo = new THREE.BoxGeometry(width, height, depth);
  // Create a mesh
  const cube = new THREE.Mesh(cubeGeo, cubeMat);
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  cube.castShadow = true;
  cube.receiveShadow = true;
  return cube;
}

function createSphere() {
  // Geometry
  const sphereGeo = new THREE.SphereGeometry(4, 30, 30);
  // Material
  const sphereMat = new THREE.MeshLambertMaterial({
    color: "#016FB9"
    // wireframe: true
  });
  // Mesh (Geometry + Material)
  const mesh = new THREE.Mesh(sphereGeo, sphereMat);
  // Position the mesh
  mesh.position.x = 20;
  mesh.position.y = 4;
  // Set up the shadows
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  // Return it to be used later on
  return mesh;
}

function addLight() {
  // Create a light
  const pointLight = new THREE.PointLight("#ffffff", 2);
  // Change the light's X, Y and Z position
  pointLight.position.x = 3;
  pointLight.position.y = 18;
  // Lights should cast shadows
  pointLight.castShadow = true;
  // Change the shadow map size
  pointLight.shadow.mapSize.width = 2048;
  pointLight.shadow.mapSize.height = 2048;
  // Return it so I can add it to the scene
  return pointLight;
}

function addLightHelper(light) {
  const pointLightHelper = new THREE.PointLightHelper(light);
  return pointLightHelper;
}

function createController() {
  const details = {
    rotationSpeed: 0.02,
    bouncingSpeed: 0.02,
    lightX: 3,
    lightY: 18,
    lightZ: 0
  };
  return details;
}

function addGUI(controller) {
  const gui = new dat.GUI();
  gui.add(controller, "rotationSpeed", 0, 1);
  gui.add(controller, "bouncingSpeed", 0, 1);
  gui.add(controller, "lightX", -50, 50);
  gui.add(controller, "lightY", -50, 50);
  gui.add(controller, "lightZ", -50, 50);
}

const renderer = createRenderer();
const scene = createScene();
const camera = createCamera();
const axesHelper = createAxesHelper();
const floor = createFloor();
const cube = createCube({
  width: 4,
  height: 4,
  depth: 4,
  x: -4,
  y: 4,
  z: 0
});
const controller = createController();
const gui = addGUI(controller);

const sphere = createSphere();
const light = addLight();
const lightHelper = addLightHelper(light);

function addOrbitControls(camera, renderer) {
  const orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
}

addOrbitControls(camera, renderer);

scene.add(cube, floor, sphere, axesHelper, light, lightHelper);
renderer.render(scene, camera);

function animate() {
  count += controller.bouncingSpeed;
  sphere.position.x = Math.cos(count) * 10 + 18;
  sphere.position.y = Math.abs(Math.sin(count)) * 10 + 4;

  light.position.x = controller.lightX;
  light.position.y = controller.lightY;
  light.position.z = controller.lightZ;

  cube.rotation.x += controller.rotationSpeed;
  cube.rotation.y += controller.rotationSpeed;
  cube.rotation.z += controller.rotationSpeed;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
