import { create } from "zustand";

const useGameStore = create((set) => ({
    isBallPitched: false,
    isBallClicked: false,
    isPlayComplete: false,
    isBatEnabled: true,
    updateBallPitch: (status: boolean) => set(() => ({isBallPitched:status})),
    updateBallClicked: (status: boolean) => set(() => ({isBallClicked:status})),
    updatePlayComplete: (status: boolean) => set(() => ({isPlayComplete:status})),
    updateBatEnabled: (status: boolean) => set(() => ({isBatEnabled:status})),
    resetPlay: () => set(() => ({
        isBallPitched: false,
        isBallClicked: false,
        isPlayComplete: false,
        isBatEnabled: true
    }))
    


}))


export { useGameStore }
