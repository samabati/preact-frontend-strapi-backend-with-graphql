import {useEffect, useState} from 'preact/hooks'

const useFetch = (url) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try{
            const res = await fetch(url);
            const json = await res.json()
            setData(json);
            setLoading(false);
            }
            catch(err){
                setLoading(false);
                setError(err);
            }
        }

        fetchData();
    }, [url])

    return {loading, error, data};
}

export default useFetch;