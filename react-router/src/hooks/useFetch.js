import { useEffect, useRef, useState } from "react";

export default function useFetch(url, _name) {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)
    let name = useRef(_name)

    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;
        setLoading(true)
        fetch(url, {
            signal
        })
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
            setError(null)
            console.log(data)
        })
        .catch(err => setError(err.message))

        // cleanup function 
        return () => {
            abortController.abort()
        }
    }, [url, name])

    return {data, loading, error} // {data} means {data: data}
}