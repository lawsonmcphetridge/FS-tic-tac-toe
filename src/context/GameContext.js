import { createContext, useState } from 'react';

const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [turn, setTurn] = useState('X');
  const [active, setActive] = useState();
  const [message, setMessage] = useState('');
  const [boxes, setBoxes] = useState([
    {
      space: 1,
      content: '',
    },
    {
      space: 2,
      content: '',
    },
    {
      space: 3,
      content: '',
    },
    {
      space: 4,
      content: '',
    },
    {
      space: 5,
      content: '',
    },
    {
      space: 6,
      content: '',
    },
    {
      space: 7,
      content: '',
    },
    {
      space: 8,
      content: '',
    },
    {
      space: 9,
      content: '',
    },
  ]);

  const setSpace = (space) => {
    setBoxes((prevBoard) => {
      return prevBoard.map((box) => {
        return box.space === space ? { ...box, content: turn } : box;
      });
    });
  };
    
  function switchTurn() {
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
  }

  return (
    <UserContext.Provider
      value={{ currentPlayer, setCurrentPlayer, message, boxes, setMessage, setBoxes, setSpace, setTurn, turn, switchTurn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext, };
