import axios from "axios";
import { useEffect, useState } from "react";

export default function useFutureWork() {
    const [futureWork, setFutureWork] = useState()

    function getFutureWork() {
        axios.get('https://admin.ht-med.uz/api/v1/future-plans-list/')
            .then(res => setFutureWork(res.data.results))
            .catch(errors => console.log('Fetching error', errors))
    }

    useEffect(() => {
        getFutureWork()
    }, [])

    return {futureWork}
}