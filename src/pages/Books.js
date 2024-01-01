import React from 'react';
import "./Book.css";
import Navbar from "../Components/Layouts/Navbar/Navbar";
import Searchinputform from '../Components/Forms/searchinputform/Searchinputform';
import Poductlistingall from '../Components/Layouts/Poductlistingall/Poductlistingall';
import Footer from "../Components/Layouts/Footer/Footer";

const Books = () => {
  return (
    <section>
        <Navbar darkTheme ={true} />

          <div className="search-container">
            <h2>Find the<span className="text-primary">Book </span>that you want</h2>
            <Searchinputform darkTheme={false}/>
          </div>


          <Poductlistingall/>
          <Footer/>

    </section>
  )
}

export default Books;