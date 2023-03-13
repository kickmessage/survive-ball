import * as THREE from "three";
import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useBall, useScoreDetection } from "../hooks"
import { useGameStore } from "../state"
import {  useEffect, useRef, useState } from "react";

interface Props {
    texture: THREE.Texture;
}
export default function Ball({texture }: Props) {
    const { camera } = useThree();
    const isBallClicked = useGameStore((s: any) => s.isBallClicked);
    const isBallPitched = useGameStore((s: any) => s.isBallPitched);
    const updateIsBallPitched = useGameStore((s: any) => s.updateIsBallPitched);
    const isBatEnabled = useGameStore((s: any) => s.isBatEnabled);
    const updateIsBallClicked = useGameStore((s:any) => s.updateIsBallClicked);
    const state = useGameStore((state:any) => state);
    const isPlayStarted = useGameStore((state:any) => state.isPlayStarted);
    const args: [x: number, y: number, z: number] = [20,30,30]
    const ballPosition = {
        x: 50, y: 100, z: 0
    }


    const ballPosRef = useRef<any>([ballPosition.x, ballPosition.y, ballPosition.z])
    const { detectHomeRun, detectBunt } = useScoreDetection();



    useEffect(()=> {
        if (isBallPitched) {

            api.mass.set(1);
            console.log('blah')
            throwBall(api)
        }
        


    }, [isBallPitched])







    const [ref, api ] = useSphere<THREE.Mesh>(()=>({args: [args[0]], mass: 0, position:[ballPosition.x,ballPosition.y, ballPosition.z], type: "Dynamic"}  ));
    const { throwBall, hitBall } = useBall(
        {
            isBallClicked: isBallClicked,
            isBallPitched: isBallPitched,
            updateIsBallPitched: updateIsBallPitched,
            isBatEnabled: isBatEnabled,
            updateIsBallClicked: updateIsBallClicked,
            state: state 
        }

    );

    const [currentState, setCurrentState] = useState();
    useEffect(()=> {
        setCurrentState(state)

    }, [])
    useEffect(()=> {

      //  console.log('state change...',)
      //  console.log('prev state:', currentState);
      //  console.log('new state: ', state)
        console.log('-----------------state changes: ');
        for (const key in state) {
            if (currentState && currentState[key] !== state[key]) {
                console.log(key, ':', state[key]);

            }
        }
        console.log('-------------------end of state changes')
        setCurrentState(state)
    }, [state])


    useEffect(() => {
        const unsubscribe = api.position.subscribe((p) => (ballPosRef.current = p));
        return unsubscribe;


    }, [])




    useFrame(({ clock }) => {
        api.rotation.set(Math.sin(clock.getElapsedTime()) , clock.getElapsedTime(), 0);

        if (isBallClicked) {
            camera.lookAt(ballPosRef.current[0],ballPosRef.current[1], ballPosRef.current[2])

        }

        if (!isPlayStarted) {
            api.position.set(ballPosition.x, ballPosition.y, ballPosition.z)
            api.velocity.set(0,0,0);
            api.mass.set(0);
            camera.lookAt(0,40,0)


        }
        detectHomeRun(ballPosRef.current);
        detectBunt(ballPosRef.current);


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

