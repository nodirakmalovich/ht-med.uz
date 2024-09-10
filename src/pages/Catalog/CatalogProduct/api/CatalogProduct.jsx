'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export function useCatalogProductApi() {

    const [catalogProduct, setCatalogProduct] = useState()

    function getCatalogProductApi() {
        axios.get(`https://admin.ht-med.uz/api/v1/product-list/?limit=9&search=&parent=&categories__slug=`)
            .then(res => setCatalogProduct(res.data.results))
            .catch(error => console.log('Fetching error', error))
    }

    useEffect(() => {
        getCatalogProductApi()
    }, [])

    return { catalogProduct }
}