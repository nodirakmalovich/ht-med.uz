'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeCategoriesApi() {

    const [HomeCategories, setHomeCategories] = useState([])

    function getHomeCategories() {
        axios.get('https://admin.ht-med.uz/api/v1/category-image-list/')
            .then(res => {
                setHomeCategories(res.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        getHomeCategories()
    }, [])

    return { HomeCategories }
}