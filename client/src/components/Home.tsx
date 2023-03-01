import {useEffect} from 'react';
import t from "../static/assets/EW7s2zy.jpeg"
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { Physics } from "@react-three/cannon";
import * as THREE from "three";
import { Ball, BuntWalls, Clouds, Cursor, CursorDetectionPlane, Ground, Poles, HomeRunText, OutText, Person, Ring, Streak, Walls, BuntDetectionWalls, HomeRunDetectionWalls, Mound } from "../objects"
import { camera, AmbientLight} from "../constants"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


function CameraController() {
    const { camera, gl } = useThree();
    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 1;
            controls.maxDistance = 100;
            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );
    return null;
};

function Scene() {
    const texture = useLoader(THREE.TextureLoader, t);

       

    return(
        <>
            <CameraController/>

            <AmbientLight/>

            <Physics
                gravity={[0, -0.01, 0]}
                defaultContactMaterial={{friction: 0.02, restitution: 1}}
                stepSize={1/500}>
                <Ball texture={texture}/>
                <BuntWalls />
                <Ground />
                <Poles />
                <Walls />
                <Mound />
            </Physics>

{/*

             <Clouds />
              <Cursor />
            <CursorDetectionPlane />
            <HomeRunText visible={false}/>
            <OutText visible={false}/>
            <Person />
            <Ring />
            <Streak points={[new THREE.Vector3(0,0,0), new THREE.Vector3(0,1,0)]}/>
            <BuntDetectionWalls/>
            <HomeRunDetectionWalls />
*/}
        </>

    )



}
export default function App() {

    return(
        <Canvas
            camera={camera}
            shadows={true}
            style={{width: '100vw', height: '100vh'}}
            color='blue'

        >
            <Scene/>



        </Canvas>
    )
}
