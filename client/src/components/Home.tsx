import {useEffect, useState, useContext, useRef} from 'react';
import t from "../static/assets/EW7s2zy.jpeg"
import sky from "../static/assets/sky.png";
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { Physics, Debug } from "@react-three/cannon";
import * as THREE from "three";
import { Ball, BuntWalls, Clouds, Cursor, CursorDetectionPlane, Ground, Poles, HomeRunText, OutText, Person, Ring, Streak, Walls, BuntDetectionWalls, HomeRunDetectionWalls, Mound, ThrowButton } from "../objects"
import { camera, AmbientLight, Spotlight} from "../constants"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGameStore } from "../state"
import "./Home.css"


function CameraController() {
    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 1;
            controls.maxDistance = 1000;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

function Scene() {
    const BodyTexture = useLoader(THREE.TextureLoader, t);
    //const SkyTexture = useLoader(THREE.TextureLoader, sky);





    return(
        <>

            <AmbientLight/>
            <Spotlight />

            <Physics
                gravity={[0,-600, 0]}
                defaultContactMaterial={{friction: 0.02, restitution: 0.6}}
                stepSize={1/1500}
                iterations={3}
                broadphase="SAP"
            >

            <Debug color="black" scale={1.1}>


                    <Ball texture={BodyTexture}/>

                        <Walls />
                        <BuntWalls />
                        <Poles />
                        <Mound texture={BodyTexture}/>


                    <Ground />




            </Debug>
            </Physics>


            <Clouds />

            <CursorDetectionPlane />
            <Cursor />



            <HomeRunText />
            <OutText />

            <Person texture={BodyTexture}/>
            <Ring />

            <Streak points={[new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0)]}/>

            <BuntDetectionWalls/>

            <HomeRunDetectionWalls />
            <ThrowButton/>

            {/*

              */}
        </>

    )



}
export default function Home() {
    //    const { isBallPitched, isBallClicked, isBatEnabled, isPlayComplete } = useGameStore((state:any) => state);
    //   const stateRef = useRef<any>(useGameStore.getState());
    //    const updateBallPitch  = useGameStore((state: any) => state.updateBallPitch);
    //    console.log('boop', stateRef.current)
    //
    //    useEffect(() => {
    //        useGameStore.subscribe(
    //            state => (stateRef.current = state)
    //        )
    //        console.log(stateRef.current)
    //
    //
    //    }, [])



    // setGameState((prevState) => ({
    //     ...prevState,
    //     isBallPitched: true,
    // }));
    // console.log("updated game state", gameState);
    //    useEffect(()=> {
    //        console.log('initial state', state)
    //
    //
    //    }, [])
    //
    //    useEffect(() => {
    //        console.log('updated state', state);
    //
    //
    //    }, [state])


    return(

        <div className="home-wrapper">

            <Canvas
                style={{width: '100vw', height: '100vh', background: 'white'}}
                camera={camera}
                shadows={true}

            >
                {/* @dev background isn't changing will figure out later */}
                {/*   <texture attach="background" args={{SkyTexture}}/>*/}
                <Scene/>



            </Canvas>

        </div>


    )
}
