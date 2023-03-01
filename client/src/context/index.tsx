import { createContext, useContext, useState } from 'react';

type StateType = {
    isBallPitched: boolean;
    isBallClicked: boolean;
    isPlayComplete: boolean;
    isBatEnabled: boolean;
};

type ContextType = {
    state: StateType;
    setState: React.Dispatch<React.SetStateAction<StateType>>;
};

const defaultState: StateType = {
    isBallPitched: false,
    isBallClicked: false,
    isPlayComplete: false,
    isBatEnabled: true,
};

const StateContext = createContext<ContextType>({
    state: defaultState,
    setState: () => {},
});

const useStateContext = () => useContext(StateContext);

interface StateProviderProps {
    children: React.ReactNode;
}

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
    const [state, setState] = useState<StateType>(defaultState);

    return (
        <>
            <StateContext.Provider value={{ state, setState }}>
                {children}
            </StateContext.Provider>
        </>
    );
};

export { defaultState, StateProvider, useStateContext };

