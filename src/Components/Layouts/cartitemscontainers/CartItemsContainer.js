import React, { useContext } from 'react';
import './CartItemContainer.css';
import CartItemCard from '../../Cards/cartitemcard/CartItemCard';
import {CartContext } from '../../../App';
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom';

const CartItemsContainer = () => {
  const {cartItems, totalAmmount} = useContext(CartContext);
  const stripeKey = 'pk_test_51OT56LSHaBniFzIPEyy2kxIWQzlBbRDVEu3HjfA5JIbjpUwSWaViVhMLJUk4r64Y0xqFAUAavTr8eeBn0LCdWSKD002ehHRz2q';
  const navigate = useNavigate();

  const onToken = (token) => {
    console.log(token);
    alert("Your payment has been processed");
    navigate('./books');
  }

  return (
    <section className="cart-item-container">
        <div className='container'>
          {totalAmmount === 0 ? (
              <h2>Currently your cart is empty</h2>
          ):(
              <React.Fragment>
                <h2>Cart</h2>
                
                {cartItems.map((item) =>(
                  <CartItemCard key={item.id} bookData={item}/>
                ))}
    
                <h2>Total Ammount = &#8377; {totalAmmount} </h2>
    
                
                <StripeCheckout 
                  name="Book Checkout"
                  description="Please fill in the details below"
                  amount={totalAmmount * 100}
                  currency="INR"
                  stripeKey={stripeKey}
                  token={onToken}
                  billingAddress
                >

                  <button className="button-primary"> Proceed to cheakout</button>
                
                
                </StripeCheckout>
              </React.Fragment>


          )}
            
              
        </div>
    </section>
  )
}

export default CartItemsContainer;