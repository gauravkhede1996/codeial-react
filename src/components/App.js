import { useEffect} from "react";
import { getPosts} from '../api';
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
  // const [result,setResult]=useState([]);
  // console.log(typeof result," is type of data and data is ",result);
  useEffect(()=>{
    const fetchPosts=async ()=>{
      const response =await getPosts();
      console.log('response',response);
    }
    fetchPosts();
    // const fetchProducts=async ()=>{
    //   const response =await getProducts();
    //   await setResult([response]);
    //   console.log(typeof response);
    //   console.log('response',response);
    // }
    // fetchProducts();
  },[]);
   
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar /> 
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
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
