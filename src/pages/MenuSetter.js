import React from 'react'
import './menu.css'
import {useState} from 'react'
const MenuSetter = () => {
    const [seePassword,setSeePassword]=useState("password");
    const [editProfile,setEditProfile]=useState(true);
    const [deleteAccount,setDeleteAccount]=useState(false);
    const [usernamePassword,setUsernamePassword]=useState(true);
    const passwordVisibility=()=>{
       if(seePassword==='password'){
        setSeePassword('text');
        
       }else{
        setSeePassword('password');
       }
       } 
  return (
    <div className='menu-setter'>
        <form className='forms'>
            {editProfile &&(
               <div className='edit-profile'>
               <p className='close' onClick={()=>setEditProfile(false)}>❌</p>
               <div className='choose-edit'>
                   <button type='button'onClick={()=>setUsernamePassword(true)} className={usernamePassword ? 'active' : ''} >Edit user name</button>
                   <button type='button'onClick={()=>setUsernamePassword(false)}className={!usernamePassword?'active':null}>Edit password</button>
               </div>
               {usernamePassword &&(
                    <div className='change-username'>
                    <input type='text' placeholder='Enter your new username'required/>
                    <input type='text' placeholder='Confirm your new username'required/>
                    <button type='submit'>Save Change</button>
                </div>
               )}
              {!usernamePassword&&(
                       <div className='change-password'>
                       <input type='text' placeholder='Enter your current password'required minLength={6}maxLength={6}/>
                       <input type='text' placeholder='Enter your new password'required maxLength={6}minLength={6}/>
                       <input type='text' placeholder='Confirm your new password'required maxLength={6}minLength={6}/>
                       <button type='submit'>Save Change</button>
                   </div>
              )}
          
             </div> 
            )}
              {deleteAccount &&(
                        <div className='delete-account'>
                            <p className='close' onClick={()=>setDeleteAccount(false)}>❌</p>
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
    </div>
  )
}

export default MenuSetter