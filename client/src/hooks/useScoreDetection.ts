import { useThree } from "@react-three/fiber"
import { useGameStore } from "../state"
import * as THREE from "three";

export default function useScoreDetection() { //@todo typing
    const isPlayComplete = useGameStore((state: any) => state.isPlayComplete);
    const updatePlayComplete = useGameStore((state:any) => state.updatePlayComplete);
    const updateScoreResult = useGameStore((state:any) => state.updateScoreResult);
    const totalScore = useGameStore((state:any) => state.totalScore);
    const remainingLives = useGameStore((state:any) => state.remainingLives);
    const updateTotalScore = useGameStore((state: any) => state.updateTotalScore);
    const updateRemainingLives = useGameStore((state:any) => state.updateRemainingLives);
    const get = useThree((state) => state.get);
    const homeRunDetectionWalls = get().scene.children.filter((group) => {
        return group.name === 'home-run-detection-walls'


    })[0]
    const buntDetectionWalls = get().scene.children.filter((group) => {
        return group.name === 'bunt-detection-walls'


    })[0]

    const detectionRaycaster = new THREE.Raycaster();
    function detectHomeRun(ballPosition: any) {//@TODO typing
        if (homeRunDetectionWalls) {
            let rayCasterOrigin = new THREE.Vector3(ballPosition[0], ballPosition[1], ballPosition[2]);
            let rayCasterDirection =  new THREE.Vector3(0, -1 , 0);
            detectionRaycaster.set(rayCasterOrigin, rayCasterDirection)
            let homeRunDetection = detectionRaycaster.intersectObjects(homeRunDetectionWalls.children, true);
            if (homeRunDetection.length > 0 && !isPlayComplete) {
                console.log('home run detected')
                updatePlayComplete(true);
                updateScoreResult('run')
                updateTotalScore( totalScore+ 1);
                return true;

            }

        }

    }
    function detectBunt(ballPosition: any) {//@TODO typing
        if (buntDetectionWalls) {
            let rayCasterOrigin = new THREE.Vector3(ballPosition[0], ballPosition[1], ballPosition[2]);
            let rayCasterDirection =  new THREE.Vector3(0, -1 , 0);
            detectionRaycaster.set(rayCasterOrigin, rayCasterDirection)
            let buntDetection = detectionRaycaster.intersectObjects(buntDetectionWalls.children, true);
            if (buntDetection.length > 0 && !isPlayComplete) {
                console.log('bunt detected')
                updatePlayComplete(true);
                updateScoreResult('out')
                updateRemainingLives(remainingLives-1);
                return true
            }


        }



    }

    return({ detectHomeRun, detectBunt})


}
