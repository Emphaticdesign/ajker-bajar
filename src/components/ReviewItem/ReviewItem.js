import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        borderTop: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
    };
    return (
        <div>
            <div style={reviewItemStyle} className="review-item">
                <div className="name">
                    <h4 className="product-name">{name}</h4>
                </div>
                <div className="quantity">
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="remove-button">
                    <button
                        onClick={() => props.removeProduct(key)}
                    >Remove </button>
                </div>
                <div className="price">
                    <p>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;