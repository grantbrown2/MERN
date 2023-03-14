import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import './App.css';
import Detail from './components/Detail';

const App = () => {
    
    return(
  <div className='App'>
      <BrowserRouter>
            <Routes>
              <Route element={<Main/>} path="/home" default />
              <Route element={<Detail/>} path="/people/:id" />
            </Routes>
      </BrowserRouter>
        </div>
    ) 
}
export default App;

