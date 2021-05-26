import React, {useState, useEffect} from 'react'
import {API_KEY} from "./Key"
const CONTEXT_KEY="c18dad8e6d8f4e662"

const  useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).
            then(res => res.json())
            .then(result => {
                setData(result);
            })
        }
        fetchData();
    }, [term])
    return {data}
}

export default useGoogleSearch
