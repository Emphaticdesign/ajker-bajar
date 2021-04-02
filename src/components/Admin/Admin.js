import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import './Admin.css'

const Inventory = () => {
    return (
        <div className="admin-panel">
            <AddProduct></AddProduct>
        </div>
    );
};

export default Inventory;