import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Number from './components/Number';
import Text from './components/Text';
import TextWithColor from './components/TextWithColor';

function App() {
  return (
    <div className="App">
      <h1>Routing Practice</h1>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:number' element={<Number />}/>
        <Route path='/:text' element={<Text />} />
        <Route path='/:text/:color/:backColor' element={<TextWithColor />} />
      </Routes>
    </div>
  );
}

export default App;
