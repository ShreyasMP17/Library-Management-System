import "../styles/landingPage.css"
import { Link } from "react-router-dom";
const LandingPage = () => {

    return ( 
        <div className="main">
            <div className="new">
        <div className="landingPage">    
            <h1>LIBRARY MANAGEMENT SYSTEM</h1>
            <div className="selectLogin">
                <div className="adm"> 
                <img height="130" width="130" src="./images/lg4.png" alt="" /> <br />
                <Link to="/admin-login" id="one">Admin Login</Link></div>
                <div className="use">
                <img height="130" width="130" src="./images/lg4.png" alt="" /><br />
                <Link to="/user-login"id="two">User Login</Link></div>
                </div> 
                 </div>
                 </div>
                  </div>
     );
}
 
export default LandingPage;