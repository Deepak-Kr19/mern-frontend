import { useState } from "react";
import axios from "axios";
import './Register.css';
import { Link } from "react-router-dom";
// import { useRef } from "react";

export default function Register() {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const API_URL = import.meta.env.VITE_API_URL;
     const handleSubmit = async () => {
    try {
      const url = `${API_URL}/api/users/register`;
      
      const result = await axios.post(url, user);
      setError("Data saved successfully");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

    return(
        <div className="App-Register-Row">
            <div style={{backgroundColor: "white"}}>
                <h2>Registration Form</h2>
            {error && <p className="error">{error}</p>}
            <p>
                <input type="text" onChange={(e) => setUser({ ...user, firstName: e.target.value})} placeholder="Enter first name: " />
            </p>
            <p>
                <input type="text" onChange={(e) => setUser({ ...user, lastName: e.target.value})} placeholder="Enter last name: " />
            </p>
            <p>
                <input type="email" onChange={(e) => setUser({ ...user, email: e.target.value})} placeholder="Enter email: " />
            </p>
            <p>
                <input type="password" onChange={(e) => setUser({ ...user, password: e.target.value})} placeholder="Enter password: " />
            </p>
            <button onClick={handleSubmit}>Submit</button>
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
            </div>
            

        </div>
    )
    
}

/*
export default function Register() {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        const user = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value
        };
        console.log("User data submitted:", user);
        // Here you can add code to send the user data to your backend
    };

    return(
        <div className="App-Register-Row">
            <div style={{backgroundColor: "white"}}>
                <h2>Registration Form</h2>
            <p>
                <input type="text"  placeholder="Enter first name: " ref={firstName}/>
            </p>
            <p>
                <input type="text"  placeholder="Enter last name: " ref={lastName}/>
            </p>
            <p>
                <input type="email"  placeholder="Enter email: " ref={email}/>
            </p>
            <p>
                <input type="password" placeholder="Enter password: " ref={password}/>
            </p>
            <button onClick={handleSubmit}>Submit</button>
            </div>
            

        </div>
    )
}
    */
