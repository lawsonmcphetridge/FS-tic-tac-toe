import React, { useContext } from 'react';
import { UserContext } from '../context/GameContext';

export default function ResetGame({ space }) {
  const { resetGame, active } = useContext(UserContext);


  return (<>
    {!active && <button onClick={() => {
      resetGame(space);
    }}>
            Reset game
    </button>
    }
  </>
  );
}
