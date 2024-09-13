import axios from "axios";
import { useEffect, useState } from "react";

export default function useAchievments() {


    const [achievments, setAchievments] = useState([])

    function getAchievments() {
        axios.get(`https://admin.ht-med.uz/api/v1/achievements-list/?limit=200&offset=0`)
            .then(res => setAchievments(res.data.results))
            .catch(errors => console.log('Fetching errors', errors))
    }

    useEffect(() => {
        getAchievments()
    }, [])

    return { achievments }

}