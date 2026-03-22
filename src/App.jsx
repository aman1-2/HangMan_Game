import { Route, Routes } from 'react-router-dom';
import './App.css'

import { WordContext } from './context/wordContext';
import { useState } from 'react';

import StartGame from './pages/StartGame';
import PlayGame from './pages/playGame';
import Home from './pages/Home';

function App() {
  const [wordList, setWordList] = useState([]);

  return (
    <WordContext.Provider value={{wordList, setWordList}}>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/start' element = {<StartGame></StartGame>}></Route>
        <Route path='/game' element = {<PlayGame></PlayGame>}></Route>
      </Routes>
    </WordContext.Provider> 
  );
}

export default App;
