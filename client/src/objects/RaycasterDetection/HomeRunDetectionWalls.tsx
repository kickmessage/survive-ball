import * as THREE from "three";
function LeftWallHomeRunDetection() {
    return(
        <mesh position={[-1000,500,0]} rotation={[Math.PI/2, 0,0]}>

            <planeGeometry args={[1000,1000]}/>
            <meshStandardMaterial side={THREE.DoubleSide}  color="ForestGreen"/>

        </mesh>
    )
}

function RightWallHomeRunDetection() {
    return(
        <mesh position={[500,-1000,0]} rotation={[Math.PI/2, 0,0]}>

            <planeGeometry args={[1000,1000]}/>
            <meshStandardMaterial side={THREE.DoubleSide}  color="ForestGreen"/>

        </mesh>
    )
}





export default function HomeRunDetectionWalls() {
    return(
        <group>
            <LeftWallHomeRunDetection />
            <RightWallHomeRunDetection />
        </group>
    )


}
