import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState();
  const [turn, setTurn] = useState('X');
  const [catsGame, setCatsGame] = useState(false);
  const [active, setActive] = useState(true);
  const [message, setMessage] = useState('');
  const [winner, setWinner] = useState('');
  const [winnerMessage, setWinnerMessage] = useState('');
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

  function endGame() {
    let className = '';
    if (!active) {
      className = 'game-over';
    }
    return className;
  }

  const resetGame = () => {
    setBoxes((prevBoard) => {
      return prevBoard.map((box) => {
        return { ...box, content: '' };
      });
    });
    setWinnerMessage('');
    setTurn('X');
    setWinner('');
    setActive(true);
  };

  const isSpaceContent = (boxes) => {
    if (boxes.content) {
      return true;
    }
  };

  const checkCatsGame = () => {
    if (boxes.every(isSpaceContent)) {
      setCatsGame(true);
      setActive(false);
      setWinnerMessage('Cats game!');
    }
  };
  const checkWinner = () => {
    if (boxes[0].content === 'X' && boxes[1].content === 'X' && boxes[2].content === 'X') {
      setWinner('X');
    }
    if (boxes[0].content === 'X' && boxes[3].content === 'X' && boxes[6].content === 'X') {
      setWinner('X');
    }
    if (boxes[1].content === 'X' && boxes[4].content === 'X' && boxes[7].content === 'X') {
      setWinner('X');
    }
    if (boxes[3].content === 'X' && boxes[4].content === 'X' && boxes[5].content === 'X') {
      setWinner('X');
    }
    if (boxes[6].content === 'X' && boxes[7].content === 'X' && boxes[8].content === 'X') {
      setWinner('X');
    }
    if (boxes[0].content === 'X' && boxes[4].content === 'X' && boxes[8].content === 'X') {
      setWinner('X');
    }
    if (boxes[2].content === 'X' && boxes[4].content === 'X' && boxes[6].content === 'X') {
      setWinner('X');
    }
    if (boxes[0].content === 'O' && boxes[1].content === 'O' && boxes[2].content === 'O') {
      setWinner('O');
    }
    if (boxes[3].content === 'O' && boxes[4].content === 'O' && boxes[5].content === 'O') {
      setWinner('O');
    }
    if (boxes[1].content === 'X' && boxes[4].content === 'X' && boxes[7].content === 'O') {
      setWinner('O');
    }
    if (boxes[0].content === 'X' && boxes[3].content === 'X' && boxes[6].content === 'O') {
      setWinner('O');
    }
    if (boxes[6].content === 'O' && boxes[7].content === 'O' && boxes[8].content === 'O') {
      setWinner('O');
    }
    if (boxes[0].content === 'O' && boxes[4].content === 'O' && boxes[8].content === 'O') {
      setWinner('O');
    }
    if (boxes[2].content === 'O' && boxes[4].content === 'O' && boxes[6].content === 'O') {
      setWinner('O');
    } else {
      checkCatsGame();
    }

    return winner;
  };
  const checkGame = () => {
    if (!active) return;
    const gameWinner = checkWinner();
    if (gameWinner) {
      setActive(false);
      setWinnerMessage(`${winner} wins`);
    } else {
      return null;
    }
  };

  checkGame();

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
        catsGame,
        winner,
        winnerMessage,
        checkGame,
        active,
        setWinnerMessage,
        endGame
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
