import { useEffect,useState } from "react";
import { getPosts} from '../api';
import Home from '../pages/Home';
import Loader from './Loader';
import Navbar  from './Navbar'



function App() {
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchPosts=async ()=>{
      const response =await getPosts();
      console.log('response',response);
      if(response.success){
        setPosts(response.data.posts);
      }
      setLoading(false);
    }
    fetchPosts();
  },[]);
  if(loading){
    return <Loader/>
  }

  return (
    <div className="App">
      {/* <h1> Hello World</h1>   */}
      <Navbar />
      <Home posts={posts}/>
    </div>
  );
}


export default App;
