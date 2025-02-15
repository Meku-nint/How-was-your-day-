import React from 'react';
import NavBar from './NavBar';
import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuSetter from './MenuSetter';
const LoginAuthentication = () => {
  const [isLoggin,setLogin] = useState(true);
  const navigate=useNavigate();
  const handleSubmit=()=>{
      navigate('/user');
  }
  return (
    <div className='login-page'>
        <NavBar/>
        <div className='form'>
            <img className='default' src="https://images.unsplash.com/photo-1738168601625-5a472d90952a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" alt='There is no image'/>
           {isLoggin &&(
              <form className='input-forms'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9BK-GUVk2SepI9SX6biLSuzC8Ek0s1ku5g&s"alt='the image is not opened'/>
              <input type='email' placeholder='Enter Your Email' minLength={11} maxLength={30} required/>
              <input type='password' placeholder='Enter Your Password  👁️' maxLength={6} minLength={6} required/>
              <button type='submit'onClick={handleSubmit}>login</button>
              <div className='forget-create'>
                  <p >Forgot Password?</p>
                  <p onClick={()=>setLogin(false)}>Create an Account</p>
              </div>
          </form>
           ) }
            {!isLoggin &&(
              <form className='input-forms'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9BK-GUVk2SepI9SX6biLSuzC8Ek0s1ku5g&s"alt='the image is not opened'/>
              <input type='email' placeholder='Enter Your Email' minLength={11} maxLength={30} required/>
              <input type='password' placeholder='Enter Your Password' maxLength={6} minLength={6} required/>
              <input type='text'placeholder='Enter your name' minLength={11} maxLength={30} required/>
              <input type='password' placeholder='Confirm Your Password' maxLength={6} minLength={6} required/>
              <button type='submit'onClick={handleSubmit}>Create an Account</button>
              <div className='forget-create'>
                  <p onClick={()=>setLogin(true)}>I have already an Account</p>
              </div>
          </form>
           ) }
            
        </div>
        <MenuSetter/>
        <footer className='footer'>
            © 2023 Your Company. All rights reserved.
        </footer>
    </div>
  );
}
export default LoginAuthentication;