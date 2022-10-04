import React, { useContext } from 'react';
import './BoardList.css';
import Box from '../Box.js/Box';
import { UserContext } from '../context/GameContext';

export default function BoardList() {
  const { boxes, turn } = useContext(UserContext);
  return (<>
    <h1>Its {turn}s turn</h1>
    <div className='game-container'>
      {boxes.map((box) => (
        <Box
          key={box.space}
          space={box.space}
          content={box.content}
        />
      ))}
    </div>
  </>
  );
}
