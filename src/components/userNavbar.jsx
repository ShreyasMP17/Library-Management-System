import { Link } from "react-router-dom";
import "../styles/userNavbar.css"

const UserNavbar = () => {
    return (
        <div className="main1">
            <div className="userNavbar">
                <p> <b> User Portal</b></p>
                <Link to="/user/"> Home</Link>
                <Link to="/user/book-list" href="">Book List</Link>
                <Link to="/" href="" id="onee"><b>Logout</b></Link>
            </div>
        </div>
    );
}

export default UserNavbar;