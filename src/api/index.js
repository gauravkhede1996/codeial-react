import {LOCALSTORAGE_TOKEN_KEY,API_URLS} from '../utils/index';
const customFetch=async (url,{body,...customConfig})=>{
    const token= window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    const headers={
        "mode":"no-cors",
        'content-type':'application/json',
        Accept:'application/json'
    }
    if(token){
        headers.Authorization=`Bearer ${token}`;
    }
    const config={
        ...customConfig,
        headers:{   
            ...headers,
            ...customConfig.headers
        }
    }
    if(body){
        config.body=JSON.stringify(body);
    }
    try{
        console.log(fetch(url,config),' is the result of fetch');
        const response=await fetch(url,config);
        console.log(response,' is the response');
        const data=await response.json();
        console.log(data,' is the data');
        if(data.success){
            return{
                data:data.data,
                success:true
            }
        }
        throw new Error(data.message);
    }catch(error){
        console.log(error);
        return{
            message:error.message,
            success:false
        };
    }
}

export const getPosts= (page=1,limit=5)=>{
    return customFetch(API_URLS.posts(page,limit),{
        method:'GET',
        
    })
}
