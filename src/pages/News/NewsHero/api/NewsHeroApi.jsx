'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function useNewsHeroApi() {

    const [blogNews, setBlogNews] = useState([]);


    function getNews() {
        axios.get('https://admin.ht-med.uz/api/v1/news-list/?page=1')
            .then(res => {
                setBlogNews(res.data.results)
            })
            .catch(error => console.log('Fetching error', error))
    }

    useEffect(() => {
        getNews()
    }, [])

    return { blogNews }
}