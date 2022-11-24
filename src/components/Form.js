import React,{useState} from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Form.css";
const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allentry, setAllentry] = useState([]);

    const SubmitForm = (e) => {
        e.preventDefault();
        if(email && password){
        const newEntry = {id: new Date().getTime().toString() ,email,password}

        setAllentry([...allentry,newEntry])
        setEmail("");
        setPassword("");
        }else{
            alert("Please fill the data")
        }

    }
    return(
        <>
        
        <form action="" onSubmit={SubmitForm}>
           <div className="One"> 
        <div>
            <label htmlFor="email">Email </label>
            &nbsp; &nbsp; &nbsp;&nbsp;
            <input type="text" name="email" id="email" autoComplete="off" 
            value= {email} 
            onChange={(e) => setEmail(e.target.value) }
            />

        </div>
<br></br>
        <div >
            <label htmlFor="password">Password </label>
            <input type="password" name="password" id="password" autoComplete="off" 
            value= {password} 
            onChange={(e) => setPassword(e.target.value) }
            />
        </div>
        <br></br>
        {/* <button type="submit">Login</button> */}
        <Link to="/Dashboard" > Login</Link>
        </div>
        </form>

</>
    )
}

export default Form;