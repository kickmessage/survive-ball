import { useRef, useEffect } from "react";
import * as THREE from "three";
const rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI/4)

interface Props {
    texture: THREE.Texture;

}

function Body({texture}: Props) {
    return(
        <mesh position={[0,0.7,0]}>
            <cylinderGeometry args={[0.1, 0.1, 1.5, 32]} />
            <meshPhongMaterial map={texture}/>
        </mesh>
    )
}


//var headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
//var headMaterial = new THREE.MeshPhongMaterial({map: texture});
//var head = new THREE.Mesh(headGeometry, headMaterial);
//head.position.y = 2;

function Head({texture}: Props) {
    return(
        <mesh position={[0,2,0]}>
            <sphereGeometry args={[0.5,32,32]}/>
            <meshPhongMaterial map={texture} />
        </mesh>
    )
}

//var legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 32);
//var legMaterial = new THREE.MeshPhongMaterial({ map: texture});
//var leftLeg = new THREE.Mesh(legGeometry, legMaterial);
function LeftLeg({texture}: Props) {
    return(
        <mesh position={[-0.25, -0.75, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 1.5, 32]} />
            <meshPhongMaterial map={texture} />

        </mesh>
    )
}



//var rightLeg = new THREE.Mesh(legGeometry, legMaterial);
function RightLeg({texture}: Props) {
    return(
        <mesh position={[0.25, -0.75, 0]}>
            <cylinderGeometry args={[0.1,0.1,1.5,32]} />
            <meshPhongMaterial map={texture} />

        </mesh>
    )
}
//leftLeg.position.set(-0.25, -0.75, 0);
//rightLeg.position.set(0.25, -0.75, 0);

//var armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.75, 32);
//var armMaterial = new THREE.MeshPhongMaterial({ map: texture});
//var leftArm = new THREE.Mesh(armGeometry, armMaterial);
//var rightArm = new THREE.Mesh(armGeometry, armMaterial);
function LeftArm({texture}: Props) {
    return(
        <mesh position={[-0.5,1,0]}>
            <cylinderGeometry args={[0.1,0.1, 0.75, 32]} />
            <meshPhongMaterial map={texture} />
        </mesh>
    )
}

function RightArm({texture}: Props) {
    return(
        <mesh position={[0.5,1,0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.75, 32]} />
            <meshPhongMaterial map={texture} />
        </mesh>
    )
}
//leftArm.position.set(-0.5, 1, 0);
//rightArm.position.set(0.5, 1, 0);
//

export default function Person({texture}: Props) {
    const ref = useRef<THREE.Group>(null!);
    useEffect(()=> {

    ref.current.quaternion.multiply(rotation)

    })
    return(
        <group scale={[30,30,30]} ref={ref} position={[0,50,0]}>
            <Body texture={texture}/>
            <Head texture={texture}/>
            <LeftLeg texture={texture}/>
            <RightLeg texture={texture}/>
            <LeftArm texture={texture}/>
            <RightArm texture={texture}/>
        </group>
    )
}

