import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import PlayerStatus from './components/PlayerStatus';
import ListPlayers from './components/ListPlayers';
import AddPlayer from './components/AddPlayer';
import GameBar from './components/GameBar';
import GameStatus from './components/GameStatus';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/players/list' element={<>
          <PlayerStatus />
          <ListPlayers />
        </>} />
        <Route path='/players/add' element={<>
          <PlayerStatus />
          <AddPlayer />
        </>} />
        <Route path='/status/game' element={<GameBar/>} />
        <Route path='/status/game/1' element={<>
          <GameBar />
          <GameStatus/>
        </>} />
        <Route path='/status/game/2' element={<>
          <GameBar />
          <GameStatus/>
        </>} />
        <Route path='/status/game/3' element={<>
          <GameBar />
          <GameStatus/>
        </>} />
      </Routes>
    </div>
  );
}

export default App;
