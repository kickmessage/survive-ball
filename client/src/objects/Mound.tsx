
//@dev not sure how to type this
export default function Mound(texture: any) {
    return(
        <mesh position={[0,-80,0]}>
            <sphereGeometry args={[100,20,20]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}

