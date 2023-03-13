import { Billboard, Center, ScreenSpace, Text3D } from "@react-three/drei";
import * as THREE from "three";
import {FONT_URL} from "../static/"
import { useGameStore } from "../state";
import { useRef, useEffect } from "react";

export default function HUD() {
    const totalScore = useGameStore((state:any) => state.totalScore);
    const remainingLives = useGameStore((state:any) => state.remainingLives);

    const scoreRef = useRef<THREE.Mesh>(null!);
    const livesRef = useRef<THREE.Mesh>(null!);


    useEffect(()=> {
        if (scoreRef.current && livesRef.current) {

            scoreRef.current.position.y += 1.5; 
            scoreRef.current.position.x -= 0.65;
            livesRef.current.position.y += 1.5;
            livesRef.current.position.x += 0.5;
        }
        


    })




    return(
        <ScreenSpace depth={1}>
            <Billboard
                follow={true}
                lockX={true}
                lockY={true}
                lockZ={true}
            >
                <Center top left>
                    <mesh name="HUD-score-text" ref={scoreRef}>
                        <Text3D
                            font={FONT_URL}
                            size={0.15}
                            height={0.01}
                            curveSegments={12}
                            bevelEnabled={false}
                            //        bevelThickness={0.005}
                            //        bevelSize={0.02}
                            //        bevelOffset={0}
                            //        bevelSegments={1}
                        >
                            score :  {totalScore}
                            <meshPhongMaterial color="blue"/>
                        </Text3D>
                    </mesh>
                </Center>
                <Center top right>
                    <mesh name="HUD-score-text" ref={livesRef}>
                        <Text3D
                            font={FONT_URL}
                            size={0.15}
                            height={0.01}
                            curveSegments={12}
                            bevelEnabled={false}
                            //        bevelThickness={0.005}
                            //        bevelSize={0.02}
                            //        bevelOffset={0}
                            //        bevelSegments={1}
                        >
                            lives :  {remainingLives}
                            <meshPhongMaterial color="red"/>
                        </Text3D>
                    </mesh>
                </Center>
            </Billboard>
        </ScreenSpace>
        



    )



}
