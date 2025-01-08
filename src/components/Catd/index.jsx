import Image from 'next/image'
import React from 'react'
import './Card.css'
import Link from 'next/link'

const Card = ({ product }) => {
    return (
        <Link href={'/product/' + product.id}>
            <div className='card'>
                <Image className='card__immage' src={product.image} width={282} height={348} />
                <p>{product.rating}</p>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        </Link>
    )
}

export default Card
