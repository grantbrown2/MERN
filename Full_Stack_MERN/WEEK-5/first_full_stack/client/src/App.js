import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import './App.css';
import Detail from './components/Detail';
import Update from './components/Update';

const App = () => {
    
    return(
  <div className='App'>
      <BrowserRouter>
            <Routes>
              <Route element={<Main/>} path="/home" default />
              <Route element={<Detail/>} path="/people/:id" />
              <Route element={<Update/>} path="/people/edit/:id"/>
            </Routes>
      </BrowserRouter>
        </div>
    ) 
}
export default App;

