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
        console.log(fetch(url,config),' is the result of fetch for url',url);
        const response=await fetch(url,config);
        console.log(response,' is the response of url',url);
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
export const getProducts=()=>{
    return customFetch("http://localhost:8000/product/fetchProducts",{
        method:'GET',
        
    })
}
export const createProduct=(values)=>{
    console.log(JSON.stringify(values)," are the values we got in createProduct function");
    
    fetch("http://localhost:8000/product/create",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    }).then(result=>{
        console.log(result,' is the result of POST API');
        return;
    })
}
export const updateProduct=(values)=>{
    fetch("http://localhost:8000/product/updateProduct",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(values)
    }).then(result=>{
        console.log(result,' is the result of POST API');
        return;
    })
}
export const deleteProduct=(productId)=>{
    fetch(`http://localhost:8000/product/delete/${productId}`,{
        method:'DELETE',
        
    }).then(result=>{
        console.log(result,' is the result of POST API');
        return;
    })
}
