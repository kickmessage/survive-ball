import { Html} from "@react-three/drei";
import { useGameStore } from "../state"
import { useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import "./GameOver.css"

export default function GameOverScreen() {

    const remainingLives = useGameStore((state:any) => state.remainingLives);
    const [isVisible, setIsVisible] = useState(false);
    const { camera } = useThree();

    useFrame(() => {
        if(remainingLives === 0 && isVisible === false) {
            setTimeout(()=> {
            //@dev for some reason the html doesn't render until the camera moves
            //... janky but it works
            //@TODO find cleaner solution eventually
            camera.position.x +=1;
            console.log('game over menu visibility changed')
            setIsVisible(true);


            }, 2000)
        }


    })


    function handleClick(buttonAction: 'restart' | 'submit' | 'view' ) {
        if (buttonAction === 'restart') {
            console.log('restart button clicked!')
            window.location.reload();


        }
        if (buttonAction === 'submit') {

            console.log('submit button clicked!')

        }
        if (buttonAction === 'view') {
            console.log('view button clicked!')


        }


    }

    return(

        <Html
            center 
            occlude={!isVisible}
        >
            <div className="game-over-menu">

                <h1>GAME OVER!</h1>
                <div className="game-over-menu-buttons-container">

                <button
                    onClick={(e) => {handleClick('restart')}}                               
                >
                   Play Again 
                </button>
                <button

                    onClick={(e) => {handleClick('submit')}}                               
                >
                    Submit to Leaderboard
                </button>
                <button
                    onClick={(e) => {handleClick('view')}}                               
                >
                    View Leaderboard
                </button>

                </div>
            </div>
        </Html>
    )


}
