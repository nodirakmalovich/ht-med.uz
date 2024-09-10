'use client'
import { useEffect, useState } from "react";

const { default: axios } = require("axios");


export default function useCatalogModalApi() {

    const [categories, setCategories] = useState()

    function handleCategory() {
        axios.get("https://admin.ht-med.uz/api/v1/category-image-list/")
            .then(res => {
                setCategories(res.data.results)
                
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        handleCategory()
    }, [])

    return {categories}
}