import {useEffect} from 'react';
import t from "../static/assets/EW7s2zy.jpeg"
import sky from "../static/assets/sky.png";
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { Physics } from "@react-three/cannon";
import * as THREE from "three";
import { Ball, BuntWalls, Clouds, Cursor, CursorDetectionPlane, Ground, Poles, HomeRunText, OutText, Person, Ring, Streak, Walls, BuntDetectionWalls, HomeRunDetectionWalls, Mound } from "../objects"
import { camera, AmbientLight, Spotlight} from "../constants"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


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
    const SkyTexture = useLoader(THREE.TextureLoader, sky);

    const { camera } = useThree();
    useEffect(()=> {
        console.log('camera', camera)
    }, [])




    return(
        <>
            <CameraController/>

            <AmbientLight/>

            <Physics
                gravity={[0, -0.01, 0]}
                defaultContactMaterial={{friction: 0.02, restitution: 1}}
                stepSize={1/500}>
                <Ball texture={BodyTexture}/>

                     <BuntWalls />

                     <Ground />

                     <Poles />

                     <Walls />

                     <Mound texture={BodyTexture}/>
                { /* 

                   */}
            </Physics>

                <Clouds />

                <Cursor />

                <CursorDetectionPlane />

            
                <HomeRunText visible={false}/>
                <OutText visible={false}/>

                <Person texture={BodyTexture}/>
                <Ring />

                <Streak points={[new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0)]}/>

                <BuntDetectionWalls/>

                <HomeRunDetectionWalls />

            {/*

              */}
        </>

    )



}
export default function App() {

    return(
        <Canvas
            style={{width: '100vw', height: '100vh'}}
            camera={camera}
            shadows={true}

        >
            {/* @dev background isn't changing will figure out later */}
            {/*   <texture attach="background" args={{SkyTexture}}/>*/}
            <Scene/>



        </Canvas>
    )
}
