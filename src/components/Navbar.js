import styles from '../styles/navbar.module.css'
import {Link,useNavigate } from 'react-router-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import { useSelector,useDispatch } from 'react-redux';
import allActions from '../actions';
const Navbar=()=>{
    const currentUser=useSelector(state=> state.currentUser);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const logOut=()=>{
        dispatch(allActions.userActions.logOut());
        return navigate('/login');
    }
    return (
        
        <div className={styles.nav}>
            <div className={styles.leftDiv}>
                <a href="/">
                    <img alt="" src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"></img>
                </a>
            </div>
            <div className={styles.rightNav}>
                <div className={styles.user}>
                    <a href="/">
                        <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg" alt="" className={styles.userDp}></img>
                        <span> {currentUser.loggedIn?currentUser.user.email:<></>}</span>
                    </a>
                </div>
                <div className={styles.navLinks}>
                    
                    
                    {currentUser.loggedIn?<ul><li>
                        <Button onClick={logOut}> Log Out</Button>
                        </li></ul>:
                        <ul>
                        <li>
                            <Link to="/userHome">Log In</Link>
                        </li>
                        
                        <li> 
                            <a href="/"> Register Here</a> 
                        </li>
                        </ul>
                        }
                        

                    
                </div>
            </div>
        </div>
    );
}
export default Navbar;