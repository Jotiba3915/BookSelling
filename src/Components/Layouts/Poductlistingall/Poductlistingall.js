import React from 'react';
import "./Poductlistingall.css";

import Productlistingcard from "../../Cards/product-listing-card/Productlistingcard";
import { BookData } from '../../../util/BookData';

const Poductlistingall = () => {
  return (
    <section className="product-listing-all-container">
        <div className="container">
            <div className="grid-container">
                
                    {BookData.map((book) => {
                        return(
                            <div key={book.id} className="grid-item">
                                <Productlistingcard bookData = {book}/>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
       
    </section>
      
      )
      
}

export default Poductlistingall;