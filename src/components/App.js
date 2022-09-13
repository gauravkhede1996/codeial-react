import { useEffect, useState } from "react";
import { getPosts,getProducts} from '../api';
import CheckingRoutes from './CheckingRoutes';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Form from '../pages/Form';

import  {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

import Navbar from './Navbar';

// const Login=()=>{
//   var params=useParams();
//   var {user}=params;
//   return (<div> {user} LoggedIn </div>);
// }
// const Signup=()=>{
//   <div> SignUp </div>
// }
// const Home=()=>{
//   <div> Home</div>
// }
function App() {
  const [data,setData]=useState([]);
  console.log(typeof data," is type of data and data is ",data);
  useEffect(()=>{
    const fetchPosts=async ()=>{
      const response =await getPosts();
      console.log('response',response);
    }
    fetchPosts();
    const fetchProducts=async ()=>{
      const response =await getProducts();
      setData([response]);
      console.log(typeof response);
      console.log('response',response);
    }
    fetchProducts();
  },[]);
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar /> 
      <Routes>
      <Route exact path="/" element={<Home data={data[0].data}/>}></Route>
      <Route exact path="/CheckingRoutes" element={<CheckingRoutes/>}></Route>
      <Route path="/signup" element={<h1>H1 Component</h1>}> </Route>
      <Route path="login/:user" element={<Login />}></Route>
      <Route path="/form" element={<Form />} />
      <Route path="/*" element={<Navigate to="/signup"/>}></Route>
      
      
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
