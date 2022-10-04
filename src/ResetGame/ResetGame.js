import React, { useContext } from 'react';
import { UserContext } from '../context/GameContext';

export default function ResetGame({ space }) {
  const { resetGame } = useContext(UserContext);
  return (
    <button onClick={() => {
      resetGame(space);
    }}>
            Reset game
    </button>
  );
}
