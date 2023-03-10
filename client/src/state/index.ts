import { create } from "zustand";


type ScoreResultType = "run" | "out" | null;
const useGameStore = create((set) => ({
    isBallPitched: false,
    isBallClicked: false,
    isPlayComplete: false,
    isBatEnabled: true,
    scoreResult: null,
    totalScore: 0,
    remainingLives: 10,
    updateBallPitch: (status: boolean) => set(() => ({isBallPitched:status})),
    updateBallClicked: (status: boolean) => set(() => ({isBallClicked:status})),
    updatePlayComplete: (status: boolean) => set(() => ({isPlayComplete:status})),
    updateBatEnabled: (status: boolean) => set(() => ({isBatEnabled:status})),
    updateScoreResult: (status: ScoreResultType) => set(() => ({scoreResult:status})),
    updateTotalScore: (status: number) => set(()=> ({totalScore:status})),
    updateRemainingLives: (status: number) => set(() => ({remainingLives: status})),
    resetPlay: () => set(() => ({
        isBallPitched: false,
        isBallClicked: false,
        isPlayComplete: false,
        isBatEnabled: true,
        scoreResult: null,
    }))
    


}))


export { useGameStore }
