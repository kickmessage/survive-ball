import * as THREE from "three";
import { usePlane} from "@react-three/cannon";

export default function Ground() {

    let rotation = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2);
    const [ref ] = usePlane<THREE.Mesh>(()=> ({mass: 0,rotation: [Math.PI/2, 0,0]}));

    return(
        <mesh ref={ref}>
            <planeGeometry args={[1000,1000]}  />
            <meshStandardMaterial side={THREE.DoubleSide} color='darkgrey'/>

        </mesh>
    )


}
