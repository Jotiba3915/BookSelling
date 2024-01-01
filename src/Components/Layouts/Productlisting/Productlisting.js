import React from 'react';
import "./Productlisting.css";
import Productlistingcard from '../../Cards/product-listing-card/Productlistingcard';
import { BookData } from "../../../util/BookData";

const Productlisting = () => {
  return (
    <div className="product-listing-container"> 
      <div className="Container">
        <h2> Here are some <span className="text-primary">books</span> that tou might like</h2>

        <div className="listing-container">
            {BookData.slice(0.4).map((book) =>(
                <Productlistingcard key={book.id} bookData = {book} />
            ))}
            
        </div>=
      </div>
    </div>
  )
}

export default Productlisting;