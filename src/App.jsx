import { Route, Routes } from 'react-router-dom';
import './App.css'
import TextInput from './components/TextInput/TextInput';
import TextInputFormContainer from './components/TextInputForm/TextInputFormContanier';
import StartGame from './pages/startGame';
import PlayGame from './pages/playGame';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<div>Home Page</div>}></Route>
      <Route path='/start' element = {<StartGame></StartGame>}></Route>
      <Route path='/game' element = {<PlayGame></PlayGame>}></Route>
    </Routes>
  );
}

export default App;
