import * as THREE from "three";
import { usePlane} from "@react-three/cannon";

export default function Ground() {

    const [ref ] = usePlane<THREE.Mesh>(()=> ({mass: 0,rotation: [-Math.PI/2, 0,0], type: "Static"}));

    return(
        <mesh ref={ref} name='ground'>
            <planeGeometry args={[1000,1000]}  />
            <meshStandardMaterial  color='darkgrey'/>

        </mesh>
    )


}
