import { create } from "zustand";


type ScoreResultType = "run" | "out" | null;
const useGameStore = create((set) => ({
    isPlayStarted: false,
    isBallPitched: false,
    isBallClicked: false,
    isPlayComplete: false,
    isBatEnabled: true,
    scoreResult: null,
    totalScore: 0,
    remainingLives: 10,
    updateIsPlayStarted: (status:boolean) => set(()=> ({isPlayStarted:status})),
    updateIsBallPitched: (status: boolean) => set(() => ({isBallPitched:status})),
    updateIsBallClicked: (status: boolean) => set(() => ({isBallClicked:status})),
    updateIsPlayComplete: (status: boolean) => set(() => ({isPlayComplete:status})),
    updateIsBatEnabled: (status: boolean) => set(() => ({isBatEnabled:status})),
    updateScoreResult: (status: ScoreResultType) => set(() => ({scoreResult:status})),
    updateTotalScore: (status: number) => set(()=> ({totalScore:status})),
    updateRemainingLives: (status: number) => set(() => ({remainingLives: status})),
    resetPlay: () => set(({
        isBallPitched: false,
        isBallClicked: false,
        isPlayStarted: false,
        isPlayComplete: false,
        isBatEnabled: true,
        scoreResult: null,
    }))
    


}))


export { useGameStore }
