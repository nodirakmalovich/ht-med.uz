'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeCommentApi() {


    const [commentData, setCommentData] = useState()

    function getComment() {

        axios.get('https://admin.ht-med.uz/api/v1/comment-list/')
            .then(res => {
                setCommentData(res.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    useEffect(() => {
        getComment()
    }, [])

    return {commentData}
}