import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import {auth} from './fireBase';

export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();

    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
            if(auth){
                history.push("/");
            }
        }).catch(err=>alert(err.message))
    }

    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(auth=>{
            if(auth){
                history.push("/");
            }
        }).catch(err=>alert(err.message))
    }

    return (
        <div className="login">
        <Link to="/">
            <img src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?    resize=740%2C204" alt="No Logo" aria-hidden className="login_logo"/>
        </Link>
        <div className="login_form_container">
            <form>
                <h1>Sign-In</h1>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                <button className="login_button" onClick={signIn}>Sign In</button>
            </form>
            <p>By signing-in you are agreed to the AMAZON FAKE CLONE Conditioning of Use & Sale.Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice</p>
            <button className="register_button" onClick={register}>Create Your Amazon Account</button>
        </div>
        </div>
    )
}
