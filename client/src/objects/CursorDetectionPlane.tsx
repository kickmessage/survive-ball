import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CursorDetectionPlane() {

    const ref = useRef<THREE.Mesh>(null!);
    const {scene} = useThree();
    const cursor = scene.children.filter((object)=> {
        return object.name === 'cursor';


    })[0]
    const camera = useThree((state) => state.camera)
    return(
        <mesh 
            position={[camera.position.x-20, camera.position.y-8, camera.position.z -20]} 
            rotation={[0, Math.PI/4, 0]}
            ref={ref}
            onPointerMove={(e) => cursor.position.set(e.point.x, e.point.y, e.point.z)}
            name="cursor-detection-plane"
        >
            <planeGeometry args={[200,200]} />
            <meshStandardMaterial transparent={true} opacity={0} />
        </mesh>
    )
}

