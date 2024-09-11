' use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function useBlogApi() {

    const blog_slug = localStorage.getItem('blog_slug')
    const [singleBlog, setSingleBlog] = useState({})

    function getNews() {
        axios.get(`https://admin.ht-med.uz/api/v1/blog-list/${blog_slug}?page=1
        `)
            .then(res => {
                setSingleBlog(res.data)
            })
            .catch(error => console.log('Fetching error', error))
    }

    useEffect(() => {
        getNews()
    }, [])

    return { singleBlog }
}