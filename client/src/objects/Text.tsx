import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Text3D, Billboard, Center, ScreenSpace } from "@react-three/drei"
import { FONT_URL } from "../static/";
import { useGameStore } from "../state"
import { useFrame } from "@react-three/fiber";


export function HomeRunText() {
    const isPlayComplete = useGameStore((state: any) => state.isPlayComplete);
    const scoreResult = useGameStore((state: any) => state.scoreResult);
    const [isVisible, setIsVisible] = useState(false);
    //       const homeRunTextMaterial= new THREE.MeshPhongMaterial({transparent: true, opacity: 0, color: 'lime'});


    // const homeRunText = new THREE.Mesh(homeRunTextGeometry, homeRunTextMaterial)

    // homeRunText.rotateOnAxis(new THREE.Vector3(0, 1,0), Math.PI/4)
    // homeRunText.position.z += 50;
    // homeRunText.position.x -= 90;
    const ref = useRef<THREE.Mesh>(null!);
    useEffect(() => {
        if (isPlayComplete && scoreResult === 'run') {
            setIsVisible(true);

        }



    }, [isPlayComplete, scoreResult])

    useFrame(() => {
        if (isPlayComplete) {
            ref.current.rotation.x += 0.001
            ref.current.rotation.y += 0.001
            ref.current.rotation.z += 0.001


        }




    })




    return(
        //@dev transparency is commented out because in prev version where
        //the scene was written in vanilla js, both text objects needed to be added
        //to the scene and the opacity was changed conditionally based on if the user
        //scored a run or an out
        //in this case, I should be able to conditionally render the texts within
        //the parent component, so conditional transparency is not needed
        //but commenting out just in case I need it later

        <ScreenSpace depth={200}>
            <Billboard 
                follow={true}
                lockX={true}
                lockY={true}
                lockZ={true}

            >

                <Center>


                    <mesh ref={ref} name='home-run-text' visible={isVisible} >

                        <Text3D
                            font={FONT_URL}
                            size={50}
                            height={20}
                            curveSegments={12}
                            bevelEnabled={true}
                            bevelThickness={10}
                            bevelSize={0.02}
                            bevelOffset={2}
                            bevelSegments={5}
                        >
                            HOME RUN
                            <meshPhongMaterial

                                transparent={true}
                                opacity={1}
                                color='lime'
                                side={THREE.DoubleSide}
                            />
                        </Text3D>
                    </mesh>

                </Center>
            </Billboard>
        </ScreenSpace>
    )

}


export function OutText() {
    const isPlayComplete = useGameStore((state: any) => state.isPlayComplete);
    const scoreResult = useGameStore((state: any) => state.scoreResult);
    const [isVisible, setIsVisible] = useState(false);


    //        const outText = new THREE.Mesh(outTextGeometry, outTextMaterial)
    //        outText.rotateOnAxis(new THREE.Vector3(0, 1,0), Math.PI/4)
    //        outText.position.z += 50;
    //        outText.position.x -= 90;
    const ref = useRef<THREE.Mesh>(null!);

    useEffect(() => {
        if (isPlayComplete && scoreResult === 'out') {
            setIsVisible(true);

        }

    }, [isPlayComplete, scoreResult])
    useFrame(() => {
        if (isPlayComplete) {
            ref.current.rotation.x += 0.001
            ref.current.rotation.y += 0.001
            ref.current.rotation.z += 0.001


        }



    })

    return(
        <ScreenSpace depth={200}>
            <Billboard 
                follow={true}
                lockX={true}
                lockY={true}
                lockZ={true}
            >

                <Center>


                    <mesh ref={ref} name='home-run-text' visible={isVisible}  >

                        <Text3D
                            font={FONT_URL}
                            size={50}
                            height={20}
                            curveSegments={12}
                            bevelEnabled={true}
                            bevelThickness={10}
                            bevelSize={0.02}
                            bevelOffset={2}
                            bevelSegments={5}
                        >
                            OUT 
                            <meshPhongMaterial

                                transparent={true}
                                opacity={1}
                                color='crimson'
                                side={THREE.DoubleSide}
                            />
                        </Text3D>
                    </mesh>

                </Center>
            </Billboard>
        </ScreenSpace>

    )



}
