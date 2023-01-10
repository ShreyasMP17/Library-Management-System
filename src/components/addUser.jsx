import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {

    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [email, setEmail] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')

    let navigate = useNavigate()
    let handleClick = (e) => {
        e.preventDefault();

        //data to be posted
        let userData = {name,age,email,phoneNumber}

        //posting to server
        fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        alert("Book added successfully")
        navigate('/admin/user-list')
    }
    return (
        <div className="addUser">
            <h1>Add Users</h1>
            <div className="form">
                <form action="" onSubmit={handleClick}>
                    <div className="name">
                        <input type="text" value={name} required onChange={(e) => setName(e.target.value)} placeholder="enter the name" />
                    </div>
                    <div className="age">
                        <input type="number" value={age} required min='1' onChange={(e) => setAge(e.target.value)} placeholder="enter the age" />
                    </div>
                    <div className="email">
                        <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="enter the email" />
                    </div>
                    <div className="phoneNumber">
                        <input type="tel" value={phoneNumber} required minLength='10' maxlength='10' onChange={(e) => setPhoneNumber(e.target.value)} placeholder="enter the number" />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;