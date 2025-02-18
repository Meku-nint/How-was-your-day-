import React from 'react'
import './menu.css'
import {useState} from 'react'
const MenuSetter = ({editValue,deleteValue}) => {
const [menuList,setMenuList]=useState(editValue||deleteValue);
const [seePassword,setSeePassword]=useState("password");
const [usernamePassword,setUsernamePassword]=useState(true);
const [password,setPassword]=useState({
    password:'',
    confirmPassword:''
})
const [username,setUsername]=useState({
    username:'',
    confirmUsername:''
});
const usernameChangeHandler=(event)=>{
    const {name,value}=event.target;
    setUsername({
        ...username,[name]:value
    })
};
const passwordChangeHandler=(event)=>{
    const {name,value}=event.target;
    setPassword({
        ...password,[name]:value
    })
}
const passwordChangeHandlerSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/data.json',password).then((res)=>{
     console.log(res);
    }).catch((err)=>{
     console.log(err.message);
    })
}
const usernameChangeHandlerSubmit=(event)=>{
   event.preventDefault();
   axios.post('http://localhost:3000/data.json',username).then((res)=>{
    console.log(res);
   }).catch((err)=>{
    console.log(err.message);
   })

}
const passwordVisibility=()=>{
if(seePassword==='password'){
setSeePassword('text');

   }else{
    setSeePassword('password');
   }
   } 
return (
<div className='menu-setter'>
{menuList&&(
<form className='forms'>
{editValue &&(

           <div className='edit-profile'>
           <p className='close' onClick={()=>setMenuList(!menuList)}>❌</p>
           <div className='choose-edit'>
               <button type='button'onClick={()=>setUsernamePassword(true)} className={usernamePassword ? 'active' : ''} >Edit user name</button>
               <button type='button'onClick={()=>setUsernamePassword(false)}className={!usernamePassword?'active':null}>Edit password</button>
           </div>
           {usernamePassword &&(
         <div className='change-username'>
            <form onSubmit={usernameChangeHandlerSubmit}>
                <input type='text' placeholder='Enter your new username'required name="username" onChange={usernameChangeHandler}/>
                <input type='text' placeholder='Confirm your new username'required name="confirmUsername" onChange={usernameChangeHandler}/>
                <button type='submit'>Save Change</button>
            </form>

            </div>
           )}
          {!usernamePassword&&(
                   <div className='change-password'>
                   <input type='text' placeholder='Enter your current password'required minLength={6}maxLength={6} autoComplete='off'/>
                   <input type='text' placeholder='Enter your new password'required maxLength={6}minLength={6} autoComplete='off'/>
                   <input type='text' placeholder='Confirm your new password'required maxLength={6}minLength={6} autoComplete='off'/>
                   <button type='submit'>Save Change</button>
               </div>
          )}
      
         </div> 
        )}
          {deleteValue &&(
                    <div className='delete-account'>
                        <p className='close' onClick={()=>setMenuList(false)}>❌</p>
                        <p>Are you sure you want to delete?</p>
                        <select name="account" id="account"required>
                        <option value="no">No</option>
                        <option value="yes" required>Yes</option>
                        </select>
                        <input type='email' placeholder='Enter email'required/>
                        <input type={seePassword} placeholder='Enter your password'required maxLength={6}minLength={6} onDoubleClick={passwordVisibility}/>
                        <button type='submit'>Delete Account</button>
                   </div>
          )}
    </form> 
    )}
   
</div>
)
}

export default MenuSetter;