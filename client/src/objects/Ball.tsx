import * as THREE from "three";
import { useSphere } from "@react-three/cannon";

//@dev not sure how to type this
//
interface Props {
    texture: THREE.Texture;
}
export default function Ball({texture }: Props) {
   const ballPosition = {
       x: 50, y: 100, z: 0
   }
   
   const [ref ] = useSphere<THREE.Mesh>(()=>({mass: 0, position:[ballPosition.x,ballPosition.y, ballPosition.z],} ))
    return(
        <mesh castShadow={true} ref={ref} >
            <sphereGeometry args={[20,30,30]}/>
            <meshBasicMaterial map={texture} />
        </mesh>
    )
}

