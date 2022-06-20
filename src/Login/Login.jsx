import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import './Login.css';

const initialValues = {
    _username : "",
    _password : "",
    _subdomain : "toko"

}

const Login = () => {
    const navigate = useNavigate();

    const [authValues , setAuthValues] = useState(initialValues);
    const [error , setError] = useState("");

    let config = {
        headers: {
          "Content-type" : "application/x-www-form-urlencoded",
          "Accept" : "application/json"
        }
      };
    
    const inputHandler = (e) => {
        const { name , value} = e.target;
        setAuthValues({...authValues , [name] : value})
    }

    const submithandler = () => {
        let data = qs.stringify(authValues);
    
        axios.post('https://toko.ox-sys.com/security/auth_check', data , config)
            .then(res => sessionStorage.setItem("Authtoken" , res.data.token))
            .then(() => navigate('/'))
            .catch(err => setError(err.response.data.message));
        
    }

  return (
    <div className='login'>
        <h2>Login</h2>
        { error && <p>{error}</p>}
            <input type="text" 
                placeholder='User Name' 
                name='_username'  
                value={authValues._username} 
                onChange={inputHandler} />
            <input type="password" 
                placeholder='Password'  
                name='_password' 
                value={authValues._password}
                onChange={inputHandler} />
            <button type='submit' onClick={submithandler}>Submit</button>
    </div>
  )
}

export default Login