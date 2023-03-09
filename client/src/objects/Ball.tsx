import * as THREE from "three";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useBall } from "../hooks"
import { useGameStore } from "../state"
import {  useEffect, useRef } from "react";

interface Props {
    texture: THREE.Texture;
}
export default function Ball({texture }: Props) {
    const isBallPitched = useGameStore((state:any) => state.isBallPitched)
    
    const args: [x: number, y: number, z: number] = [20,30,30]



    useEffect(()=> {
        if (isBallPitched) {

            api.mass.set(1);
            throwBall(api)
//            console.log('ball api', api)
//            console.log('ball ref', ref)
        }



    }, [isBallPitched])

    const ballPosition = {
        x: 50, y: 100, z: 0
    }




    const [ref, api ] = useSphere<THREE.Mesh>(()=>({args: [args[0]], mass: 0, position:[ballPosition.x,ballPosition.y, ballPosition.z], type: "Dynamic"}  ));
    const { throwBall, hitBall } = useBall();

    const posRef = useRef<any>([ballPosition.x, ballPosition.y, ballPosition.z]);
    useEffect(() => {
        const unsubscribe = api.position.subscribe((p) => (posRef.current = p));
        return unsubscribe;


    }, [])




    useFrame(({ clock }) => {
        api.rotation.set(Math.sin(clock.getElapsedTime()) , clock.getElapsedTime(), 0) 
    })

    //@dev event should be ThreeEvent<MouseEvent> according to typescript linter but cannot figure out how to import this,
    //and not available by default from `yarn add @types/three` so idk.. generic typing it is for now!
    function handleClick(e: any, api: any, ballPosition: any  ) { //@TODO typing
        console.log('ball click')
        hitBall(e,api, ballPosition);




    }



    return(
        <mesh castShadow={true} ref={ref} name='ball' onClick={(e) => (handleClick(e, api, posRef.current))}>
            <sphereGeometry args={args}/>
            <meshBasicMaterial map={texture} />
        </mesh>
    )
}

