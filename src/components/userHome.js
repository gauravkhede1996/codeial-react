import { useSelector } from "react-redux";
import LoginAnt from '../components/loginAnt';
const UserHome=()=>{
    const currentUser=useSelector(state=> state.currentUser);
    
    return(

        <div>
            {currentUser.loggedIn?<h1> User Logged In</h1>: <div> <LoginAnt/></div>}
            
        </div>
    )
}
export default UserHome;