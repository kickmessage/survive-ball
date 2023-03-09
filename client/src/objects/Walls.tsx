import { useBox } from "@react-three/cannon";
import * as THREE from "three";

function LeftWall() {
    const args: [x: number, y: number, z: number] = [1000,500,100]

    const [ref ] = useBox<THREE.Mesh>(() => ({
        args: args,
        mass: 0,
        position: [0, 250, -500],
        type: "Static"}));
    return(
        <mesh ref={ref}>
            <boxGeometry args={args} />
            <meshPhongMaterial  color="brown" />
        </mesh>)




}

function RightWall() {
    const args: [x: number, y: number, z: number] = [1000,500,100]

    const [ref] = useBox<THREE.Mesh>(()=> ({
        args: args,
        mass: 0,
        position: [-500,250,0],
        rotation: [0, Math.PI/2, 0],
        type: "Static"
    }))

    return(
        <mesh ref={ref}>
            <boxGeometry args={args}/>
            <meshPhongMaterial  color="brown" />
        </mesh>
    )
}


export default function Walls() {

    return(
        <group name='walls'>
            <LeftWall/>
            <RightWall/>
        </group>
    )
}
