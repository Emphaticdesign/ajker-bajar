import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminHeader from '../AdminHeader/AdminHeader';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const addProductData = {
            name: data.name,
            price: data.price,
            key: data.key,
            img: imageURL
        };
        const url = `https://damp-everglades-67651.herokuapp.com/addProduct`;
        console.log(addProductData);

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProductData)
        })
        .then((res => console.log('image has benn posted', res)))
    };

    const handleImageUpload = product => {
        console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '259cb8627a0351959a521727bfc6a942');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    return (
        <div>
            <h2>Add Product</h2>
            <AdminHeader></AdminHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Product Name</h4>
                <input name="name" defaultValue="Product Name" ref={register} />
                <br />
                <br />
                <h4>Add Price</h4>
                <input name="price" type="number" ref={register} />
                <br />
                <br />
                <h4>Add Keys</h4>
                <input name="key" defaultValue="Add key" ref={register} />
                <br />
                <br />
                <h4>Add Photo</h4>
                <input name="" type="file" onChange={handleImageUpload} />
                <br />
                <br/>
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProduct;