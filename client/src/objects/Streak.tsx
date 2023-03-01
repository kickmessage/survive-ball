import * as THREE from "three";
import { Line } from "@react-three/drei";

interface Props {
    points: Array<THREE.Vector3>
}
export default function Streak(props: Props) {


    return(
        <mesh>
            <Line
                color="white"
                lineWidth={10}
                points={props.points}
            />

        </mesh>


    )



} 
