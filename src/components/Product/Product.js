import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, price } = props.product;
    return (
        <div className="product">
            <div className="name-img-container">
                <img src={img} alt="" />
                <h5>{name}</h5>
            </div>
            <div className="price-button-container">
                <div className="product-price">
                    <p>${price}</p>
                </div>
                <div>
                    {props.showAddToCart === true && <Link
                        to="/order"
                        className="product-main-button"
                        onClick={() => props.handleAddProduct(props.product)}
                    >
                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                    </Link>}
                </div>
            </div>

        </div>
    );
};

export default Product;