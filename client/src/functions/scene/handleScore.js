import state from "../../state"
import { textGroup } from "../../constants/objects"


const reportHomeRun = () => {
    if (!state.isPlayComplete) {
        state.isPlayComplete = true;
        //0 = home run
        //1 = out
        let homeRunText = textGroup.children[0].clone();
        homeRunText.material.opacity = 1
        setTimeout(() => {
            homeRunText.material.opacity = 0;
            location.reload(); 
        }, 3000)

    }

}

const reportGroundOut = () => {
    if (!state.isPlayComplete) {
        state.isPlayComplete = true;
        let outText = textGroup.children[1].clone();
        outText.material.opacity = 1;
        setTimeout(() => {
            outText.material.opacity = 0;
            location.reload(); 
        }, 3000)

    }



}




export {reportGroundOut, reportHomeRun};
