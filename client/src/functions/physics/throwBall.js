import * as CANNON from "cannon";
import * as THREE from "three";
import { ballBody } from "../../constants/physics";
import { ball } from "../../constants/objects";
import { cameraPosition } from "../../constants/scene";
import state from "../../state"

export const throwBall = () => {
    const centerThrow = {
        x: cameraPosition.x - 50,
        y: -20,
        z: cameraPosition.z + 10
    }
    function randomNumber(range) {
        return Math.random() * 2*range - range;
    }
    let forceVector = new CANNON.Vec3(centerThrow.x + randomNumber(60), centerThrow.y + randomNumber(25), centerThrow.z)



    ballBody.applyImpulse(forceVector.scale(3), new CANNON.Vec3(0,0,0));
//    setTimeout(() => {
//        state.isBatEnabled = true;
//        ball.material.color = new THREE.Color('green')
//
//    }, 700)
//    setTimeout(() => {
//        ball.material.color = new THREE.Color('yellow')
//    }, 350)
}





