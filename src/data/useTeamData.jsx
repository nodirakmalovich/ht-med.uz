import axios from "axios";
import { useEffect, useState } from "react";

export default function useTeamData() {
    const [teamData, setTeamData] = useState([]);
    const [personData, setPersonData] = useState([]);



    function getTeamInfo() {
        axios.get('https://admin.ht-med.uz/api/v1/about-team/')
            .then(res => setTeamData(res.data.results[0]))
            .catch(errors => console.log('Fetching error', errors))
    }

    function getPersonsInfo() {
        axios.get('https://admin.ht-med.uz/api/v1/employee-list/')
            .then(res => setPersonData(res.data.results))
            .catch(errors => console.log('Fetching error', errors))
    }

    useEffect(() => {
        getTeamInfo();
    }, [])


    useEffect(() => {
        getPersonsInfo();
    }, [])

    return { teamData, personData }
}   