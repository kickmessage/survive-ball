import * as THREE from "three";

function LeftWallBuntDetection() {
    return(
        <mesh position={[0,0,1000]} rotation={[Math.PI/2,0,0]}>
            <planeGeometry args={[1000,1000]} />
            <meshStandardMaterial side={THREE.DoubleSide} color="ForestGreen"/>

        </mesh>
    )


}




//buntWall.position.set(0, 25, 500);
//const buntWall2 = new THREE.Mesh(buntWallGeometry, buntWallMaterial)
//buntWall2.position.set(500, 25, 0);


function RightWallBuntDetection() {
    return(
        <mesh position={[1000,0,0]} rotation={[Math.PI/2,0,0]}>
            <planeGeometry args={[1000,1000]} />
            <meshStandardMaterial side={THREE.DoubleSide} color="ForestGreen" />

        </mesh>


    )




}


export default function BuntDetectionWalls() {
    return(
        <group>

            <LeftWallBuntDetection/>
            <RightWallBuntDetection/>

        </group>

    )


}
