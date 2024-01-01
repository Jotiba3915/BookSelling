import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/Layouts/Navbar/Navbar';
import Footer from '../../Components/Layouts/Footer/Footer';
import './Search.css';
import { BookData } from '../../util/BookData';
import SearchReulltCard from '../../Components/Cards/search-result-card/searchResultCard';

const Search = () => {
    const location = useLocation();
    const [searchResult, setSearchResult] = useState([]);


    useEffect(() =>{
        let searchValue = [];
        
        searchValue = BookData.filter((data) => data.book_name.toLowerCase().includes(location.state.toLowerCase()));

        setSearchResult(searchValue);
    },[])

    return (
    <section>
        <Navbar darkTheme={true}/>

        <div className='search-result-container'>
            <div className="container">
                <h2> Your Search Result</h2>

                {searchResult.map((result) =>  (
                    <SearchReulltCard key={result.id} bookData={result}/>
                ))}
            </div>
        </div>

        <Footer/>

   </section>
  )
}

export default Search;