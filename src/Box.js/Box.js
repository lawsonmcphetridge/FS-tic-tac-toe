import React, { useContext } from 'react';
import { UserContext } from '../context/GameContext';
import './Box.css';



export default function Box({ space, content }) {
  const { setSpace, switchTurn, checkSpace } = useContext(UserContext);
  const className = checkSpace(content);
    
  return (
    <div className={`${className} single-space`} onClick={() => {
      setSpace(space);
      switchTurn();
      checkSpace(content);
    }}>{content}</div>
  );
}
