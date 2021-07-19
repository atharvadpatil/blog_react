import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isPending, setIsPending] = useState(true)

    const [error, setError] = useState(null);
    
    useEffect(()=>{
        const abortConst = new AbortController();

        fetch(url, { signal : abortConst.signal })
        .then(res =>{
            console.log(res);
            if(!res.ok){
                throw Error('Unable to fetch data through given resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name ==='AbortError'){
                console.log("Fetch aborted");
            }
            else{
            setIsPending(false);
            setError(err.message);
            }
            
        })

        return () => abortConst.abort();
    },[url]);

    return { data, isPending, error }
}
 
export default useFetch;