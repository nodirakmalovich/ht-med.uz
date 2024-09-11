' use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function useNewsApi() {

    const news_slug = localStorage.getItem('news_slug')
    const [singleNews, setSingleNews] = useState({})

    function getNews() {
        axios.get(`https://admin.ht-med.uz/api/v1/news-list/${news_slug}?page=1`)
            .then(res => {
                setSingleNews(res.data)
            })
            .catch(error => console.log('Fetching error', error))
    }

    useEffect(() => {
        getNews()
    }, [])

    return { singleNews }
}