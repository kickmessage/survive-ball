import React, { createContext, useState } from 'react';

type GameContextType = {
  isBallPitched: boolean;
  isBallClicked: boolean;
  isPlayComplete: boolean;
  isBatEnabled: boolean;
};

const defaultGameContext: GameContextType = {
  isBallPitched: false,
  isBallClicked: false,
  isPlayComplete: false,
  isBatEnabled: true,
};

const GameContext = createContext<{ gameState: GameContextType; setGameState: React.Dispatch<React.SetStateAction<GameContextType>> }>({
  gameState: defaultGameContext,
  setGameState: () => {},
});

const GameContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [gameState, setGameState] = useState<GameContextType>(defaultGameContext);

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameContextProvider}
