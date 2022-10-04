import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [turn, setTurn] = useState('X');
  const [active, setActive] = useState(true);
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

  function checkSpace(content) {
    let className = '';
    if (content !== '') {
      className = 'not-clickable';
    }
    return className;
  }

  function switchTurn() {
    if (turn === 'X') {
      setTurn('O');
    } else {
      setTurn('X');
    }
  }

  const resetGame = () => {
    setBoxes((prevBoard) => {
      return prevBoard.map((box) => {
        return { ...box, content: '' };
      });
    });
  };

  if (boxes[0].content === 'X' && boxes[1].content === 'X' && boxes[2].content === 'X') {
    window.alert('X won');
  }
  if (boxes[3].content === 'X' && boxes[4].content === 'X' && boxes[5].content === 'X') {
    window.alert('X won');
  }
  if (boxes[6].content === 'X' && boxes[7].content === 'X' && boxes[8].content === 'X') {
    window.alert('X won');
  }
  if (boxes[0].content === 'X' && boxes[4].content === 'X' && boxes[8].content === 'X') {
    window.alert('X won');
  }
  if (boxes[2].content === 'X' && boxes[4].content === 'X' && boxes[6].content === 'X') {
    window.alert('X won');
  }
  if (boxes[0].content === 'O' && boxes[1].content === 'O' && boxes[2].content === 'O') {
    window.alert('O won');
  }
  if (boxes[3].content === 'O' && boxes[4].content === 'O' && boxes[5].content === 'O') {
    window.alert('O won');
  }
  if (boxes[6].content === 'O' && boxes[7].content === 'O' && boxes[8].content === 'O') {
    window.alert('O won');
  }
  if (boxes[0].content === 'O' && boxes[4].content === 'O' && boxes[8].content === 'O') {
    window.alert('O won');
  }
  if (boxes[2].content === 'O' && boxes[4].content === 'O' && boxes[6].content === 'O') {
    window.alert('O won');
  } 

  return (
    <UserContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        message,
        boxes,
        setMessage,
        setBoxes,
        setSpace,
        setTurn,
        turn,
        switchTurn,
        checkSpace,
        resetGame,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
