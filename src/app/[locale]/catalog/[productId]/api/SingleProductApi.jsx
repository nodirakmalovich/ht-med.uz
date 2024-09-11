'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function useSingleProductApi() {

    const [singleProductData, setSingleProductData] = useState([]);
    const [slug, setSlug] = useState(null);

    useEffect(() => {
        const productSlug = localStorage.getItem('productSlug');
        if (productSlug) {
            setSlug(productSlug);
        }
    }, []);

    useEffect(() => {
        if (slug) {
            getSingleProduct(slug);
        }
    }, [slug]);

    function getSingleProduct(product_slug) {
        axios.get(`https://admin.ht-med.uz/api/v1/product-list/${product_slug}?limit=1&search=&categories__slug=`)
            .then(response => {
                setSingleProductData(response.data);

            })
            .catch(error => console.log('Fetching error', error));
    }

    return { singleProductData };
}
