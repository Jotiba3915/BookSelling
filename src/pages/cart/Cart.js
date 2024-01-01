import React from 'react';
import Navbar from '../../Components/Layouts/Navbar/Navbar';
import Footer from '../../Components/Layouts/Footer/Footer';
import CartItemsContainer from '../../Components/Layouts/cartitemscontainers/CartItemsContainer'

const Cart = () => {
  return (
    <section>
        <Navbar darkTheme={true}/>

            <CartItemsContainer />       

        <Footer/>
    </section>
  )
}

export default Cart;