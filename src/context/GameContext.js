import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
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
  const [currentPlayer, setCurrentPlayer] = useState();
  const [active, setActive] = useState();
  const [message, setMessage] = useState('');
  const setSpace = (space) => {
    setBoxes((prevBoard) => {
      return prevBoard.map((box) => {
        return box.space === space ? { ...box, content: 'x' } : box;
      });
    });
  };

  return <UserContext.Provider value={{ currentPlayer, setCurrentPlayer, message, boxes, setMessage, setBoxes, setSpace }}>{children}</UserContext.Provider>;

};



export { UserProvider, UserContext };


