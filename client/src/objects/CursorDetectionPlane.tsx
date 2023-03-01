import { useThree } from "@react-three/fiber";

export default function CursorDetectionPlane() {
    const camera = useThree((state) => state.camera)
    return(
        <mesh position={[camera.position.x-20, camera.position.y-8, camera.position.z -20]}>
            <planeGeometry args={[200,200]} />
            <meshStandardMaterial transparent={true} opacity={0} />
        </mesh>
    )
}

