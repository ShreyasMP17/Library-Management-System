import { Navigate, useNavigate } from "react-router-dom";
import "../styles/userLogin.css"

const UserLogin = () => {
    let navigate = useNavigate()
    let login = () => {
        navigate('/user/')
    }
    return (
        <div className="userLogin">
            <div className="form_container">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" required placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required placeholder="enter password" />
                        </div>
                        <button>Login</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default UserLogin;