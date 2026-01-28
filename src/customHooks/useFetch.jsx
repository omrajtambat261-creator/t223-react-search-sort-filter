import { useEffect, useState } from "react";

function useFetch(url)
{
    let [loading, setLoading]=useState(false)
    let[data, setData]=useState(null)
    async function fetchData()
    {
        setLoading(true)
        let response=await fetch(url);
        let responseData=await response.json()
        setData(responseData)
        setLoading(false)
    }

    useEffect(()=>{fetchData()}, [url])

    return {loading,data}
}

export default useFetch;