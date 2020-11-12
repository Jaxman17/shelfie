import React, { useState }from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';


function Login() {

    const history = useHistory()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(err => alert(err.messsage))
    }

    const register = e =>{
        e.preventDefault();



        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
            
        })
            .catch(err => alert(err.message))

    }


  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://www.kindpng.com/picc/m/128-1284706_thumb-image-monster-hunter-world-logo-hd-png.png"
        ></img>
      </Link>

      <div className="login-container">
          <h2>Sign In</h2>
          <form>
              <h5>Email</h5>
              <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

              <h5>Password</h5>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button className='signin' type='submit' onClick={signIn}>Sign In!</button>
              
          </form>
          <p>
              By signing you agree to Hunters-R-Us' Conditions of Use & Sale. Please see our Privacy Notice. 
          </p>
                    
          <button className='login-registerbutton' onClick={register}>Create Account!</button>


      </div>
    </div>
  );
}

export default Login;
