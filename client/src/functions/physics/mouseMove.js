import * as THREE from "three";
import { camera } from "../../constants/scene"
import { ball } from "../../constants/objects"
import {mouseDetectionPlane, cursorObject} from "../../constants/objects"


export function onDocumentMouseMove(event) {

    var mouse = new THREE.Vector2();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse, camera );
    let intersects = raycaster.intersectObject( mouseDetectionPlane);


    if (intersects && intersects.length > 0) {
        const position = intersects[0].point;
        cursorObject.position.set(position.x, position.y, position.z)
        cursorObject.lookAt(ball.position)
    } 

    
}

