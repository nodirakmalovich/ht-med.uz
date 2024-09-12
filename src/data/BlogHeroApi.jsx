'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function useBlogHeroApi() {

    const [blogData, setBlogData] = useState([])

    function getBlog() {
        axios.get('https://admin.ht-med.uz/api/v1/blog-list/?page=1')
            .then(res => {
                setBlogData(res.data.results)
            })
            .catch(error => console.log('Fetching error', error))
    }

    useEffect(() => {
        getBlog()
    }, [])

    return { blogData }
}