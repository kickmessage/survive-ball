import { useMouse } from "../hooks"
import * as THREE from "three";
import { useRef } from "react";


export default function Cursor() {

    const ref = useRef<THREE.Mesh>(null!);
    const { updateCursorPosition } = useMouse();

    function handleCursorColorChange() {
        //type error saying color doesn't exist on type THREE.Material even though it does
        //@ts-ignore
        let originalColor = ref.current.material.color;
        //@ts-ignore
        ref.current.material.color = new THREE.Color('lime');
        setTimeout(() => {
            //@ts-ignore
            ref.current.material.color = originalColor;
        }, 1000)
    }
    return(
        //type error saying color doesn't exist on type THREE.Material even though it does
        //@ts-ignore 
        <mesh ref={ref} name="cursor"   onClick={(e) => (handleCursorColorChange())}>
            <sphereGeometry args={[1]}/>
            <meshBasicMaterial color="white" />
        </mesh>
    )
}
