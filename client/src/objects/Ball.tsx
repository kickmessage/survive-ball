import * as THREE from "three";
import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useBall } from "../hooks"
import { useGameStore } from "../state"
import {  useEffect, useRef } from "react";

interface Props {
    texture: THREE.Texture;
}
export default function Ball({texture }: Props) {
    const { camera } = useThree();
    const isBallPitched = useGameStore((state:any) => state.isBallPitched)
    const isBallClicked = useGameStore((state:any) => state.isBallClicked)
    const args: [x: number, y: number, z: number] = [20,30,30]
    const ballPosition = {
        x: 50, y: 100, z: 0
    }

    const ballPosRef = useRef<any>([ballPosition.x, ballPosition.y, ballPosition.z])



    useEffect(()=> {
        if (isBallPitched) {

            api.mass.set(1);
            throwBall(api)
        }



    }, [isBallPitched])






    const [ref, api ] = useSphere<THREE.Mesh>(()=>({args: [args[0]], mass: 0, position:[ballPosition.x,ballPosition.y, ballPosition.z], type: "Dynamic"}  ));
    const { throwBall, hitBall } = useBall();

    useEffect(() => {
        const unsubscribe = api.position.subscribe((p) => (ballPosRef.current = p));
        return unsubscribe;


    }, [])




    useFrame(({ clock }) => {
        api.rotation.set(Math.sin(clock.getElapsedTime()) , clock.getElapsedTime(), 0);

        if (isBallClicked) {
            camera.lookAt(ballPosRef.current[0],ballPosRef.current[1], ballPosRef.current[2])

        }


    })

    //@dev event should be ThreeEvent<MouseEvent> according to typescript linter but cannot figure out how to import this,
    //and not available by default from `yarn add @types/three` so idk.. generic typing it is for now!
    function handleClick(e: any, api: any, ballPosition: any  ) { //@TODO typing
        console.log('ball click')
        hitBall(e,api, ballPosition);




    }



    return(
        <mesh castShadow={true} ref={ref} name='ball' onClick={(e) => (handleClick(e, api, ballPosRef.current))}>
            <sphereGeometry args={args}/>
            <meshBasicMaterial map={texture} />
        </mesh>
    )
}

