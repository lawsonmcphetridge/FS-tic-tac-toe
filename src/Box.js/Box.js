import React, { useContext } from 'react';
import { UserContext } from '../context/GameContext';
import './Box.css';

export default function Box({ space, content }) {
  const { setSpace } = useContext(UserContext);
  return (
    <div className='single-space' onClick={() => {
      setSpace(space);
    }}>{content}</div>
  );
}
