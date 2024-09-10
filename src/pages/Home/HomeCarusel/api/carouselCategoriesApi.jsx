'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function carouselCategoriesApi() {

    const [carouselCategories, setCarouselCategories] = useState()

    function getCarouselCategories() {

        axios.get('https://admin.ht-med.uz/api/v1/banner-list/')
            .then(res => {
                setCarouselCategories(res.data)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

    }

    useEffect(() => {
        getCarouselCategories()
    }, [])

    return {carouselCategories}

}