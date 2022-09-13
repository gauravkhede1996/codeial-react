import {Link,useSearchParams} from 'react-router-dom';
const CheckingRoutes=()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const age=searchParams.get('age');
    const city=searchParams.get('city');
    return(<div>
    <Link to="/signup"> Go To SignUp page</Link> <br/>
    You are in {city} and having age {age} <br />
    <button onClick={()=>{return setSearchParams({...searchParams, age:60})}}> Set Age</button>

    </div>);
}
export default CheckingRoutes;