import axios from 'axios';
import React,{useState,useEffect} from 'react';

const Data = () => {
    const[data,setData]=useState({})
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState("")
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
         .then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(error => {
            setData()
            setLoading(false)
            setError("an error occured")
        })                                      
    },[])      
    return (     
        <div>                                           
            {loading ? <h2>Loading ...</h2> : data.body}
            {error && error}    
        </div>                        
    );               
};

export default Data;