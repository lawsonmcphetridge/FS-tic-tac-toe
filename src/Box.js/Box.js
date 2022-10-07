import React, { useContext } from 'react';
import { UserContext } from '../context/GameContext';
import './Box.css';



export default function Box({ space, content }) {
  const { setSpace, switchTurn, checkSpace, checkGame, endGame } = useContext(UserContext);
  const className = checkSpace(content);
  const endTheGame = endGame(content);
   

  return (
    <div className={`${className} ${endTheGame} single-space`} onClick={() => {
      setSpace(space);
      switchTurn();
      checkSpace(content);
      checkGame();
    }}>{content}</div>
  );
}
