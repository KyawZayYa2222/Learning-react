import { useEffect, useState } from "react";

export default function useFetch(url, method = "GET") {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)
    let [postData, setPostData] = useState(null)

    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;
        let options = {
            signal: signal,
            method: method,
            headers: {
                "Content-Type": "application/json",
            }
        }

        setLoading(true)
        let fetchData = () => {
            fetch(url, options)
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
        }

        if(method === "POST" && postData) {
            options.body = JSON.stringify(postData)
            fetchData()
        }

        if(method === "GET") {
            fetchData()
        }

        // cleanup function 
        return () => {
            abortController.abort()
        }
    }, [url, postData])

    return {setPostData, data, loading, error} // {data} means {data: data}
}