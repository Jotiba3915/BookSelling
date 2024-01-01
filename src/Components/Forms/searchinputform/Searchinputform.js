import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Searchinputform.css";

const Searchinputform = ({darkTheme}) => {
  const [searchField, setSearchField] = useState('')
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setSearchField(e.target.value);
  }

  const redirectToSearch = () =>{
    if(searchField === ''){
      alert('SearchField is empty');
    }else{
      navigate('/search',{state:searchField});
    }
  }

  return (
    <div className={`search-input-form-container ${darkTheme} ? 'Dark-box-shadow'; 'Light-box-shadow'}` }>
        <input 
          type="text" 
          className="Search-input" 
          placeholder="Search Books"
          value={searchField}
          onChange={handleChange}
        />
        <button onClick={redirectToSearch} className="Search-button">Search</button>
    </div>
  )
}

export default Searchinputform;