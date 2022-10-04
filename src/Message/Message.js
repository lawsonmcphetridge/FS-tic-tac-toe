import React, { useContext } from 'react';
import { UserContext } from '../context/GameContext';

export default function Message() {
  const { message } = useContext(UserContext);
  return (
    <div>{message}</div>
  );
}
