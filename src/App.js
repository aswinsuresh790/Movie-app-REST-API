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
import ActorDetails from './Pages/ActorDetails';
import Login from './Component/Login';
import Addmovies from './Component/Addmovies';

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const [titles, dispatch] = useReducer(titlesReducer, initialTitlesState)



 

  return (
    <div className="App">
     <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/view/:id' element={<ViewPage/>}></  Route>
      <Route path='/actor/:id' element={<ActorDetails/>}></Route>
      <Route path='/add' element={<Addmovies/>}></Route>




     </Routes>
     
     </>
    </div>
  );
}

export default App;
