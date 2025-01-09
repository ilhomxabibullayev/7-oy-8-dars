'use client';
import React from 'react'
import './Admin.css'

const Page = () => {
    async function handleSubmit(event) {
        event.preventDefolt();
        const form = event.target;
        const data = new FormData(form);
        const res = await fetch('http://localhost:5000/products', {
            method: 'Post',
            body: data,
        })
        console.log(res);
    }
    return (
        <div className='container form__container'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name' />
                </div>
                <div>
                    <label htmlFor="name">Category:</label>
                    <input type="text" id='category' name='category' />
                </div>
                <div>
                    <label htmlFor="name">Price:</label>
                    <input type="number" id='price' name='price' />
                </div>
                <div>
                    <label htmlFor="name">Description:</label>
                    <input type="description" id='description' name='description' />
                </div>
                <div>
                    <label htmlFor="name">Image URL:</label>
                    <input type="file" id='image' name='image' />
                </div>
                <div>
                    <label htmlFor="name">Stock:</label>
                    <input type="number" id='stock' name='stock' />
                </div>
                <div>
                    <label htmlFor="name">Rating:</label>
                    <input type="number" id='rating' name='rating' step='0,1' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Page
