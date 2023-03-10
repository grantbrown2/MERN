import './App.css';
import { Routes, Route } from 'react-router-dom';
import APIForm from './components/APIForm';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      <h1>Luke APIWalker</h1>
      <APIForm />
      <Routes>
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets" element={<Planet />} />
        <Route path="/planets/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
