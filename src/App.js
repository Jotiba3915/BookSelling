import './App.css';
import React, {useState,useEffect, createContext} from "react";
import {Routes, Route} from 'react-router-dom';
import app from "./firebase/Firebase";
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import Home from './pages/Home';
import Books from './pages/Books';
import Cart from './pages/cart/Cart';
import BookDetailed from './pages/BookDetailed';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ScrollToTop from './Components/util/ScrollToTop';
import Search from './pages/search/Search';


export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
  const auth = getAuth(app);
  const [authenticatedUser, setAuthenicatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmmount, setTotalAmmount] = useState(0);
  
  useEffect(() =>{
    onAuthStateChanged(auth,(user) =>{
      if(user){
        setAuthenicatedUser(user);
      } else{
        setAuthenicatedUser(null);
      }
    })
  },[])

  useEffect(() =>{
    let total = 0;
    cartItems.forEach((item) => {
      total = total + parseInt(item.price);
    })

    setTotalAmmount(total);  
  },[cartItems])

  return(
    <ScrollToTop>
      <UserContext.Provider value = {authenticatedUser}>
        <CartContext.Provider value={{cartItems, totalAmmount, setCartItems}}>
          <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/Books" element={<Books/>} />
            <Route path = "/cart" element={<Cart/>} />
            <Route path = "/search" element={<Search/>} /> 
            <Route path = "/book-details/:id" element={<BookDetailed/>} />
            <Route path = "/Signup" element={<Signup/>} />
            <Route path = "/Login" element={<Login/>} /> 
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
    </ScrollToTop>
  )

}



export default App;
