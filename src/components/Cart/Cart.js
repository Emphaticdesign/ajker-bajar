import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce( (total, prd) => total + prd.price , 0 )
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     console.log(product.price, product.quantity)
    //     total = total + product.price * product.quantity || 1;
    // }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <div className="cart-flex">
                <p>Product Price </p>
                <span><p>: {formatNumber(total)}</p></span>
            </div>
            <div className="cart-flex">
                <p>Tax + VAT </p>
                <span><p>: {tax}</p></span>
            </div>
            <div className="cart-flex">
                <p>Total Price </p>
                <span><p>: {grandTotal}</p></span>
            </div>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;