
interface Props {
    texture: THREE.Texture

}
export default function Mound({texture}: Props) {
    return(
        <mesh position={[0,-80,0]}>
            <sphereGeometry args={[100,20,20]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
    )
}

