'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export function CatalogHeroApi() {

    const [catalogCategories, setCatalogCategories] = useState([]);

    function getCatalogApi() {
        axios.get('https://admin.ht-med.uz/api/v1/category-list/')
            .then(res => setCatalogCategories(res.data.results))
            .catch(errors => console.log('Fetching error', errors))
    }


    useEffect(() => {
        getCatalogApi();
    }, [])

    return { catalogCategories }
}