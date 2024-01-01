import React from 'react'
import './Showcase.css';
import Navbar from '../Navbar/Navbar';
import Searchinputform from '../../Forms/searchinputform/Searchinputform';

const Showcase = () => {
  return (
    <section className="Showcase-container">

      <Navbar darkTheme={false}/>

      <div className="overlay"></div>
      <div className="Showcase-content">
        <h1> Best <span className="text-primary">Books</span> Availble </h1>
        <p> Buy quality book at cheaper price</p>

        <Searchinputform darkTheme={true}/>

      </div>
       
    </section>
  )
}

export default Showcase;