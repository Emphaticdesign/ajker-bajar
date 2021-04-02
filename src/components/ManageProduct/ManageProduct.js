import React, { useEffect, useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import Pd from '../Pd/Pd';

const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://damp-everglades-67651.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    
    return (
        <div>
            <h2>Manage Product</h2>
            <AdminHeader></AdminHeader>
            
            {
                product.map(pd => <Pd pd={pd}></Pd>)
            }
            
        </div>
    );
};

export default ManageProduct;