import axios from 'axios';
import React , {useReducer,useEffect} from 'react';

const Data = () => {
    const initialdata = {
        data : {} ,
        error : "" ,
        loader:true,
    }
    const reducer = (state,action) => {
        switch(action.type) {
            case"SUCCESS" :
            return {
                data : action.payload,
                error :"",
                loader : false
            }
            case"FAILED" : 
            return {
                data : {},
                error:"یک خطای غیر منتظره رخ داد",
                loader:false,
            }
        }
    }
    const[post,dispatch]= useReducer(reducer,initialdata)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then( response => {
            dispatch({type:"SUCCESS", payload : response.data})
        })
        .catch(error => {
            dispatch({type:"FAILED"})
        })
    },[])
    return (
        <div>
            {post.loader ? <h1>درحال بارگذاری اطلاعات  ...</h1> : post.data.body}
            {post.error && post.error}
        </div>
    );
};

export default Data;