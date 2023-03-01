import React, { useRef, useEffect } from "react";
import { Canvas }from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

import { FONT_URL } from "../static"
import "./Splash.css"


function TitleText() {

    const meshRef = useRef<THREE.Mesh>(null!);
    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            const xRotation = (event.clientY / window.innerHeight) * Math.PI * 2;
            const yRotation = (event.clientX / window.innerWidth) * Math.PI * 2;

            if (meshRef.current) {
                const center = new THREE.Vector3();
                meshRef.current.geometry.computeBoundingBox();
                if (meshRef.current.geometry.boundingBox) meshRef.current.geometry.boundingBox.getCenter(center);
                meshRef.current.rotation.x = xRotation/50;
                meshRef.current.rotation.y = yRotation/500;
            }
        }

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return(
        <Center>
            <mesh ref={meshRef}>
                <Text3D
                    font={FONT_URL}
                    size={ 2 }
                    height={ 0.15 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.02 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                >
                    SURVIVE-BALL
                    <meshNormalMaterial />
                </Text3D>

            </mesh>
        </Center>
    )
}
function Menu() {
    return(
        <div className="splash-menu-wrapper">
            <button>
                Play
            </button>
            <button>
                About
            </button>
            <button>
                settings
            </button>
        </div>

    )
}

export default function Splash() {
    return(
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.01,
                    far: 200,
                    position: [0,2,5]
                }}
            >
                <TitleText />
            </Canvas>
            <Menu/>

        </>
    )
}
