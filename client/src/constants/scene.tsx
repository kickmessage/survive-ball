import * as THREE from "three";
import sky from "../static/assets/sky.png";
import BodyTexture from "../static/assets/EW7s2zy.jpeg"
import { useLoader } from "@react-three/fiber";


const sizes = {
    x: window.innerWidth,
    y: window.innerHeight
}



const ambientLightPosition = {
    x: 50,
    y: 50,
    z: 50
}

const ballSpotLightPosition = {
    x: 0,
    y: 400,
    z: 0 
}

const cameraPosition = {
    x: 450,
    y: 100,
    z: 450
}


const camera = new THREE.PerspectiveCamera(120, sizes.x*2 / (sizes.y*3), 0.1, 10000);

camera.position.set(cameraPosition.x,cameraPosition.y,cameraPosition.z)



// add lights
function AmbientLight() {
    return(
        <ambientLight color="white" intensity={0.2}/>
    )
}

//light.position.set(ambientLightPosition.x, ambientLightPosition.y, ambientLightPosition.z);


//const ballSpotLight = new THREE.SpotLight(0xffffff, 0.5);
//ballSpotLight.angle = Math.PI/1
//ballSpotLight.castShadow = true;
////ballSpotLight.shadow.mapSize.width = 1024
////ballSpotLight.shadow.mapSize.height = 1024
//ballSpotLight.position.set(ballSpotLightPosition.x, ballSpotLightPosition.y, ballSpotLightPosition.z);
//

function spotLight() {
    return(
        <spotLight color="white" intensity={0.5} angle={Math.PI} castShadow={true} position={[ballSpotLightPosition.x, ballSpotLightPosition.y, ballSpotLightPosition.z]} />
    )
}




//export const ballSpotLightCameraHelper = new THREE.CameraHelper(ballSpotLight.shadow.camera)

//const sceneBackgroundColor = useLoader(THREE.TextureLoader, sky)
//
////baseball field
////
////texture
//const bodyTexture = useLoader;
//
///ground
//const groundGeometry = new THREE.PlaneGeometry(1000,1000)
//const groundMaterial =   new THREE.MeshStandardMaterial({
//    side: THREE.DoubleSide,
//    color: 'darkgrey'
//});
//const ground = new THREE.Mesh(groundGeometry, groundMaterial);
//let rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2)
//ground.quaternion.multiply(rotation);
//ground.position.set(0,0,0)

//walls
//const wallGeometry = new THREE.PlaneGeometry(1000,500);
//const wallMaterial =  new THREE.MeshPhongMaterial({
//    side: THREE.DoubleSide,
//    //   map: greenWallTexture 
//    color: 'brown'
//})
////leftwall
//const wall = new THREE.Mesh(wallGeometry, wallMaterial);
//wall.position.set(0,250,-500)
////rightwall
//const wall2 = wall.clone();
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI/2)
//wall2.quaternion.multiply(rotation)
//wall2.position.set(-500,250,0);
//

//stands
//
//infield/outfield poles
//(forgot the official name lol)
// Create a Three.js cylinder geometry for the pole
//var poleGeometry = new THREE.CylinderGeometry( 50, 50, 2000, 3200 );
//
//// Create a Three.js material for the pole
//var poleMaterial = new THREE.MeshPhongMaterial( {color: 'yellow'}) 
//
//// Create a Three.js mesh using the geometry and material
//var pole = new THREE.Mesh( poleGeometry, poleMaterial);
//pole.position.x = 500;
//pole.position.z = -500;
//pole.position.y += 1000;

//var pole2 = new THREE.Mesh(poleGeometry, poleMaterial)
//pole2.position.x = -500;
//pole2.position.z = 500;
//pole2.position.y += 1000;

//stands/benches (bunt area)
//
//const buntWallGeometry = new THREE.PlaneGeometry(1000,50)
//const buntWallMaterial = new THREE.MeshPhongMaterial({
//    color: 'grey',
//    side: THREE.DoubleSide
//
//})
//const buntWall = new THREE.Mesh(buntWallGeometry, buntWallMaterial);
//buntWall.position.set(0, 25, 500);
//const buntWall2 = new THREE.Mesh(buntWallGeometry, buntWallMaterial)
//buntWall2.position.set(500, 25, 0);
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI/2)
//buntWall2.quaternion.multiply(rotation)

//add detection zones for home runs
//
//
//const detectionZoneMaterial = new THREE.MeshStandardMaterial({
//    side: THREE.DoubleSide,
//    color: 'ForestGreen'
//})
//const homeRunDetectionWalls = new THREE.Group();
//const wallHomeRunDetectionGeometry = new THREE.PlaneGeometry(1000,1000);
//const leftWallHomeRunDetection = new THREE.Mesh(
//    wallHomeRunDetectionGeometry,
//    detectionZoneMaterial
//
//)
//leftWallHomeRunDetection.position.set(wall.position.x, wall.position.y, wall.position.z);
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2)
//leftWallHomeRunDetection.quaternion.multiply(rotation)
//leftWallHomeRunDetection.position.x -= 1000 
//leftWallHomeRunDetection.position.z += 500
//leftWallHomeRunDetection.position.y = 0;
//
//const rightWallHomeRunDetection = new THREE.Mesh(
//    wallHomeRunDetectionGeometry, 
//    detectionZoneMaterial
//)
//rightWallHomeRunDetection.position.set(wall2.position.x, wall2.position.y, wall2.position.z);
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2)
//rightWallHomeRunDetection.quaternion.multiply(rotation)
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI/2)
//rightWallHomeRunDetection.quaternion.multiply(rotation)
//
//rightWallHomeRunDetection.position.x += 500 
//rightWallHomeRunDetection.position.z -= 1000 
//rightWallHomeRunDetection.position.y = 0;
//
//
//
//
//
//homeRunDetectionWalls.add(leftWallHomeRunDetection, rightWallHomeRunDetection);



//bunt out area detection
//
//const buntDetectionWalls = new THREE.Group();
//const wallBuntDetectionGeometry = new THREE.PlaneGeometry(1000,1000);
//const leftWallBuntDetection = new THREE.Mesh(
//    wallBuntDetectionGeometry,
//    detectionZoneMaterial
//
//
//)
//leftWallBuntDetection.position.set(buntWall.position.x, buntWall.position.y, buntWall.position.z);
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2)
//leftWallBuntDetection.quaternion.multiply(rotation)
////leftWallBuntDetection.position.x += 750 + 4500/2;
//leftWallBuntDetection.position.z += 500;
////leftWallBuntDetection.position.y = 0;
//
//const rightWallBuntDetection = new THREE.Mesh(
//    wallBuntDetectionGeometry, 
//    detectionZoneMaterial
//
//)
//rightWallBuntDetection.position.set(buntWall2.position.x, buntWall2.position.y, buntWall2.position.z);
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2)
//rightWallBuntDetection.quaternion.multiply(rotation)
//rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI/2)
//rightWallBuntDetection.quaternion.multiply(rotation)
//
//rightWallBuntDetection.position.x += 500;
//rightWallBuntDetection.position.z += 750 + 4500/2;
//rightWallBuntDetection.position.y = 0;







export { camera, AmbientLight, spotLight,  cameraPosition }
