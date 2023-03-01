import * as THREE from "three";
import { useRef, useEffect } from "react";
import { Text3D } from "@react-three/drei"
import { FONT_URL } from "../static/";

interface Props {
    visible: boolean
}

export function HomeRunText(props: Props) {
    //       const homeRunTextMaterial= new THREE.MeshPhongMaterial({transparent: true, opacity: 0, color: 'lime'});


    // const homeRunText = new THREE.Mesh(homeRunTextGeometry, homeRunTextMaterial)

    // homeRunText.rotateOnAxis(new THREE.Vector3(0, 1,0), Math.PI/4)
    // homeRunText.position.z += 50;
    // homeRunText.position.x -= 90;
    const ref = useRef<THREE.Mesh>(null!);

    useEffect(()=> {
        ref.current.rotateOnAxis(new THREE.Vector3(0,1,0), Math.PI/4)
        ref.current.position.z += 50;
        ref.current.position.x -= 90;


    }, [])


    return(
        //@dev transparency is commented out because in prev version where
        //the scene was written in vanilla js, both text objects needed to be added
        //to the scene and the opacity was changed conditionally based on if the user
        //scored a run or an out
        //in this case, I should be able to conditionally render the texts within
        //the parent component, so conditional transparency is not needed
        //but commenting out just in case I need it later
        <mesh ref={ref}>
            <Text3D
                font={FONT_URL}
                size={50}
                height={0.2}
                curveSegments={12}
                bevelEnabled={true}
                bevelThickness={10}
                bevelSize={0.02}
                bevelOffset={2}
                bevelSegments={5}
            />
            <meshPhongMaterial

                transparent={true}
                opacity={ props.visible ? 1: 0}
                color='crimson'
            />
        </mesh>
    )

}


export function OutText(props: Props) {

    //        const outText = new THREE.Mesh(outTextGeometry, outTextMaterial)
    //        outText.rotateOnAxis(new THREE.Vector3(0, 1,0), Math.PI/4)
    //        outText.position.z += 50;
    //        outText.position.x -= 90;
    const ref = useRef<THREE.Mesh>(null!);
    useEffect(()=> {
        ref.current.rotateOnAxis(new THREE.Vector3(0,1,0), Math.PI/4)
        ref.current.position.z += 50;
        ref.current.position.x -= 90;


    })

    return(
        <mesh ref={ref}>
            <Text3D
                font={FONT_URL}
                size={50}
                height={0.2}
                curveSegments={12}
                bevelEnabled={true}
                bevelThickness={10}
                bevelSize={0.02}
                bevelOffset={2}
                bevelSegments={5}
            />
            <meshPhongMaterial
                transparent={true}
                opacity={props.visible ? 1 : 0}
                color='red'
            />

        </mesh>

    )



}
