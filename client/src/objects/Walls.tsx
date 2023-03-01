import { usePlane } from "@react-three/cannon";
import * as THREE from "three";

function LeftWall() {

    const [ref ] = usePlane<THREE.Mesh>(() => ({position: [0, 250, -500],}));
    return(
        <mesh ref={ref}>
            <planeGeometry args={[1000,500]} />
            <meshPhongMaterial side={THREE.DoubleSide} color="brown" />
        </mesh>)




}

function RightWall() {

    const [ref] = usePlane<THREE.Mesh>(()=> ({
        position: [-500,250,0],
        rotation: [0, Math.PI/2, 0],
    }))

    return(
        <mesh ref={ref}>
            <planeGeometry args={[1000,500]}/>
            <meshPhongMaterial side={THREE.DoubleSide} color="brown" />
        </mesh>
    )
}


export default function Walls() {

    return(
        <group>
            <LeftWall/>
            <RightWall/>
        </group>
    )
}
