'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function HomePartnersApi() {

    const [partnersList, setPartnersList] = useState()

    function getHomePartnersApi() {
        axios.get('https://admin.ht-med.uz/api/v1/partner-image-list/')
            .then(res => {
                setPartnersList(res.data.results)
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }


    useEffect(() => {
        getHomePartnersApi()
    }, [])

    return { partnersList }
}