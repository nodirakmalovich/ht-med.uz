'use client'
import { useRouter } from 'next/navigation';
import './ui/ProductCard.scss';
import { useState } from 'react';

export default function ProductCard({ image, title, availabilty, id }) {

    const router = useRouter();

    const handleClick = (productId) => {
        const productSlug = productId; 
        localStorage.setItem('productSlug', productSlug); 
        router.push(`/catalog/${productSlug}`); 
    };

    return (
        <div onClick={() => handleClick(id)} className="ProductCard">
            <img src={image} alt={title} className="ProductCard_image" />

            <div className="ProductCard_body">
                <p className="ProductCard_body_title">
                    {title}
                </p>

                <p className="ProductCard_body_availabilty">
                    {availabilty}
                </p>
            </div>
        </div>
    );
}
