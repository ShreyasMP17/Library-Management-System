import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css"

const AdminLogin = () => {
    let login=(s)=>{
        s.preventDefault();
        let data={email,password} // data from input

        //admin validation
        if(email=="admin@gmail.com" && password == 1234){
            navigate('/admin')
        }else{
            alert("Invalid credentials")
        }
    }

    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let navigate=useNavigate()
    return ( 
        <div className="adminLogin">
            <div className="back">
            <div className="form_container">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address"/>
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(m)=>setPassword(m.target.value)} placeholder="enter password" />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
                
            </div>
            </div>
        </div>
     );
}
 
export default AdminLogin;