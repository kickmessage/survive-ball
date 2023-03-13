import { useThree } from "@react-three/fiber";
import * as CANNON from "cannon-es"
import * as THREE from "three";
import { useGameStore } from "../state"

type Props = {
    isBallClicked: boolean;
    isBallPitched: boolean;
    isBatEnabled: boolean;
    updateIsBallClicked: (status:boolean) => void;
    updateIsBallPitched: (status:boolean) => void;
    state: any;
}

export default function useBall({isBallClicked, isBallPitched, isBatEnabled, updateIsBallClicked, updateIsBallPitched, state}: Props) { 
    const { camera } = useThree();
    const cameraPosition = camera.position;
    const get = useThree((state: any) => state.get);






    function throwBall(api: any) { //@TODO typing
        const centerThrow = {
            x: cameraPosition.x - 50,
            y: cameraPosition.y-20,
            z: cameraPosition.z + 10
        }
        function randomNumber(range: number) {
            return Math.random() * 2*range - range;
        }

        let forceVector = new CANNON.Vec3(centerThrow.x + randomNumber(60), centerThrow.y + randomNumber(25), centerThrow.z)
        forceVector = forceVector.scale(2)
        let forceArr = [forceVector.x, forceVector.y, forceVector.z]

        api.applyImpulse(forceArr, [0,0,0])
        updateIsBallPitched(true);





    }
    //@dev event should be ThreeEvent<MouseEvent> according to typescript linter but cannot figure out how to import this,
    //and not available by default from `yarn add @types/three` so idk.. generic typing it is for now!
    function hitBall(event: any, api: any, ballPosition: any) { //@TODO typing
        const ballObject = get().scene.children.filter((object:any) => {
            return object.name === 'ball'


        })[0]


        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersections = raycaster.intersectObject(ballObject);
        if (intersections.length > 0 && !isBallClicked && isBallPitched && isBatEnabled) {
            let forcePoint = intersections[0].point;
            let originVector = new CANNON.Vec3(0,0,0);
            let forceVector = new CANNON.Vec3(forcePoint.x - ballPosition[0], forcePoint.y-ballPosition[1], forcePoint.z-ballPosition[2]);
            forceVector = originVector.vsub(forceVector)
            forceVector = forceVector.scale(200)
            let forceArr = [forceVector.x, forceVector.y, forceVector.z];

            api.applyImpulse(forceArr, [0,0,0])
            updateIsBallClicked(true);







        }



    }




    return({throwBall, hitBall})









}


