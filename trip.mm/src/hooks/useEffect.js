import { useEffect, useState } from "react";

export default function useFetch(url) {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(resp => {
            console.log(resp)
            if(!resp.ok) {
                throw Error("Something went wrong!")
            }
            return resp.json()
        })
        .then(data => {
            setLoading(false)
            setData(data)
            console.log(data)
        })
        .catch(err => setError(err.message))
    }, [url])

    return {data, loading, error} // {data} means {data: data}
}