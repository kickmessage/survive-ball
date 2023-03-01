import * as THREE from "three";
import * as CANNON from "cannon";
import { camera } from "../../constants/scene"
import { ball } from "../../constants/objects"
import { ballBody } from "../../constants/physics"
import {cursorObject} from "../../constants/objects"
import getRandomColor from "../utils/getRandomColor"

import state from "../../state"

export const forceClick = () => {
    // Add a raycaster to detect clicks on the plane
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Add a click event listener to the renderer's DOM element
    // Update the mouse vector with the click position
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the raycaster with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with the ball 
    const intersections = raycaster.intersectObject(ball);
    if (intersections.length > 0) {





        if (state.isBallClicked === false && state.isBallPitched === true && state.isBatEnabled === true) {
            //            ball.material.color.set(getRandomColor()) 
            // Move the domino to the point of intersection
            //move domino up since intersection puts the middle of the domino inside the floor
            let forcePoint = intersections[0].point;
            let originVector = new CANNON.Vec3(0,0,0);
            let forceVector = new CANNON.Vec3(forcePoint.x - ball.position.x, forcePoint.y-ball.position.y, forcePoint.z-ball.position.z);
            forceVector = originVector.vsub(forceVector)




            ballBody.applyImpulse(forceVector.scale(300),originVector )
            //hide cursor on ball strike

            state.isBallClicked = true;
        }

    }


}

