import Image from 'next/image';
import React from 'react'

const PRODUCTS_URL = 'http://localhost:5000/products';

const Page = async ({ params }) => {
    const id = params.id
    const product = (await (await fetch(PRODUCTS_URL + '/' + id)).json()).data || {};

    return (
        <div className='container productDetails__container'>
            <Image src={product.image} width={282} height={348} />
            <p>{product.rating}</p>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
}

export default Page
