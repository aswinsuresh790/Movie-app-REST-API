import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import SeachBar from './Component/SeachBar';
import { useEffect, useReducer, useState } from 'react';
import { titlesReducer } from './Redux/Moviereducer';
import { initialTitlesState } from './Redux/InitialState';
import Latest from './Component/Latest';
import {Routes,Route}  from 'react-router-dom'
import Home from './Pages/Home';
import ViewPage from './Pages/ViewPage'

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const [titles, dispatch] = useReducer(titlesReducer, initialTitlesState)



 

  return (
    <div className="App">
     <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/view/:id' element={<ViewPage/>}></Route>



     </Routes>
     
     </>
    </div>
  );
}

export default App;
