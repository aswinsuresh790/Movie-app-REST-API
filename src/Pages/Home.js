import React, { useState, useEffect, useReducer } from 'react'
import Banner from '../Component/Banner'
import Header from '../Component/Header'
import Latest from '../Component/Latest'
import SeachBar from '../Component/SeachBar'


const Home = () => {
  return (
    <div>
<>
     <Header/>
     <Banner/>
     <SeachBar />
     <Latest/>
     
     </>

      
    </div>
  )
}

export default Home

