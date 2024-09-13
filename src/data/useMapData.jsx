'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function useMapData() {


    const [cityName, setCityName] = useState('toshkent_sh')
    const [cityData, setCityData] = useState([])


    function getMapData() {
        axios.get(`https://admin.ht-med.uz/api/v1/statistic-list/?state=${cityName}`)
            .then(res => {
                setCityData(res.data)
            })
            .catch(errors => console.log('Fetching error', errors))
    }

    useEffect(() => {
        getMapData()
    }, [cityName])

    return {cityData, setCityName, cityName}
}