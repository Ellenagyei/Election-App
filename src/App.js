import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import MainApp from './pages';



function App() {
  
  return (
    <div>
    <h1 >Election App</h1>  
      <BrowserRouter basename={("/")}>
        <MainApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
