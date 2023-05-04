import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/header.css'


const Header = () => {
  return (
    <div>
        <header>
            <nav className='d-flex justify-betwwen'>
                <div  className='heading-title'> <Link to={`/`}>IMDB-React</Link></div>   
                 
            </nav>




        </header>
      
    </div>
  )
}

export default Header
