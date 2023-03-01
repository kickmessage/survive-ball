import * as THREE from "three";
import { usePlane } from "@react-three/cannon";

function LeftBuntWall() {
    const [ref] = usePlane<THREE.Mesh>(()=> ({
        position: [0,25,500],

    }))
    return(
        <mesh ref={ref} >
            <planeGeometry args={[1000,50]}/>
            <meshPhongMaterial color="grey" side={THREE.DoubleSide}/>
        </mesh>
    )




}

function RightBuntWall() {
    const [ref] = usePlane<THREE.Mesh>(()=> ({
        position: [500,25,0],
        rotation: [0, Math.PI/2, 0]
    }))

    return(
        <mesh ref={ref}>

            <planeGeometry args={[0,25,500]}/>
            <meshPhongMaterial color="grey" side={THREE.DoubleSide}/>

        </mesh>
    )
}


export default function BuntWalls() {
    return(
        <group>
            <LeftBuntWall/>
            <RightBuntWall/>

        </group>
    )
}
