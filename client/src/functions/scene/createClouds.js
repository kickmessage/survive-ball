import * as THREE from "three"
import { getRandomNumber } from "../utils/getRandomNumber"

export function createClouds(radius, amount, position) {
    let clouds = [];
    for (let i = 0; i < amount; i++) {
        // Create a curvy cloud shape
        // const cloudGeometry = new THREE.BoxGeometry( 8,8, 8);
        // // Create a fluffy material for the cloud

        // const cloudMaterial = new THREE.MeshStandardMaterial({side: THREE.DoubleSide, color: 'white'})
        //            cloud.scale.set(50,50, 50)
        // Set the cloud's random position within the radius
        //        cloud.position.x = 
        //        cloud.position.z = ;
        //        cloud.position.y = 100;
        // Set the cloud's random rotation
        //        cloud.rotation.x = Math.random() * 2 * Math.PI;
        //        cloud.rotation.y = Math.random() * 2 * Math.PI;
        //        cloud.rotation.z = Math.random() * 2 * Math.PI;

        // Create the cloud mesh
        const cloud = 
            <mesh scale={[50,50,50]} position={[(Math.random() - 0.5) * radius, 100, (Math.random() - 0.5) * radius ]} rotation={[Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI]}>
                <boxGeometry args={[8,8,8]} />
                <meshStandardMaterial side={THREE.DoubleSide} color="white"/>
            </mesh>

            clouds.push(cloud);
    }
    return(
        <group position={[position.x + getRandomNumber(-position.x/10, position.x/10), position.y + getRandomNumber(-position.y/10, position.y/10), position.z + getRandomNumber(-position.z/10, position.z/10)]}>
            {clouds}
        </group>)

}

