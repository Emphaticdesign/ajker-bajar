import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import './pd.css';

const Pd = ({pd}) => {
    const deleteProduct = id => {
        fetch('/deleteProduct/:id', {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    }
    return (
        <div className="main-pd">
            <h5>{pd.name}</h5>
            <h4>${pd.price}</h4>
            <button onClick={() => deleteProduct(pd._id)}><AiFillDelete/></button>
        </div>
    );
};

export default Pd;