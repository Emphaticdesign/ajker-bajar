import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

const AdminHeader = () => {
    return (
        <div id="nav" className="nav">
            <nav>
                <Link to="/addProduct">Add Product</Link>
                <Link to="/manageProduct">Manage Product</Link>
                <Link to="/editProduct">Edit Product</Link>
            </nav>
        </div>
    );
};

export default AdminHeader;