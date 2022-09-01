import styles from '../styles/navbar.module.css'
const Navbar=()=>{
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
                        <span> Gaurav</span>
                    </a>
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <a href="/">Log In</a>
                        </li>
                        <li>
                            <a href="/"> Log Out </a>
                        </li>
                        <li> 
                            <a href="/"> Register Here</a> 
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;