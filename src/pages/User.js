import React from 'react';
import { faRightFromBracket, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFire,faArrowRight,faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import './user.css';
import MenuSetter from './MenuSetter';
import { useState } from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { NavLink } from 'react-router-dom';
const User = () => {
 const [menu,setMenu]=useState(false);
 const [editProps,setEditProps]=useState(false);
 const [deleteProps,setDeleteProps]=useState(false);
 const [edit,setEdit]=useState(false);
  const date=Date()
  return (
  <div className={(editProps||deleteProps)?'blur':''}>
    <div className='user-page'>
      <div className='user-nav'>
        <ul>
          <li onClick={()=>setMenu(!menu)}><FontAwesomeIcon icon={faBars} /></li>
          <li><a href="#how-was-your-day">How was your day</a></li>
          <li><FontAwesomeIcon icon={faFire} /></li>
        </ul>
      </div>
      {menu&&(
            <div className='menu-list'>
              <ul>
                <li onClick={()=>{
                  setEditProps(true);
                  setDeleteProps(false)}}>
                    <FontAwesomeIcon icon={faPen}/> Edit Profile</li>
               <NavLink to='/'><li><FontAwesomeIcon icon={faRightFromBracket} />Logout</li></NavLink> 
                <li onClick={()=>{
                  setDeleteProps(true);
                  setEditProps(false)}}>
                    <FontAwesomeIcon icon={faTrash}/>  Delete Account</li>
              </ul>
            </div>
          )}
          {
             (editProps||deleteProps)&&( // and operator has higher precedence than or operator.
              <div>
                <MenuSetter editValue={editProps}deleteValue={deleteProps} />
              </div>
                 
            )
          }
      <div className='user-profile'>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ23y2d2h74gdNsNvaB8v3KFXdzSNIsIibBoQ&s" 
            alt='User'
          />
        <p>Reflecting on your daily achievements and challenges allows you to hold yourself
           accountable. The TellMe App encourages
            you to review your progress at the end of each day, helping you identify areas of strength and a
            reas where improvement is needed. Whether you’ve hi
            t your targets or missed some, you'll have the clarity to adjust your actions and stay on track 
            toward your long-term goals<a href="#previous-diary">previous diary</a></p>
          </div>
          <div className='previous-diary'id="previous-diary">
                <div className='diary'>
              
                <FontAwesomeIcon  className='FontAwesomeIcon' icon={faEllipsisVertical}onClick={()=>setEdit(!edit)}/>
                {
                    edit &&(
                        <ul>
                        <li> Edit </li>
                        <li> Delete</li>
                        </ul>
                    )
                  }
                 <p className='date'>{date}</p>
                 <p className='text'>
                  Reflecting on your daily achievements and challenges allows you to
                   hold yourself accountable. The TellMe App encourages you to review your 
                   progress at the end of each day, helping you identify areas of strength 
                   and a reas where improvement is needed. Whether you’ve hi t your targets or
                    missed some, you'll have the clarity to adjust your actions and stay on track 
                    toward your long-term goals</p>
                    </div>
                    <div className='diary'>
                 <FontAwesomeIcon  className='FontAwesomeIcon' icon={faEllipsisVertical}onClick={()=>setEdit(!edit)}/>
                 {
                    edit &&(
                        <ul>
                        <li> Edit </li>
                        <li> Delete</li>
                        </ul>
                    )
                  }
                <p className='date'>{date}</p>
                 <p className='text'>
                  Reflecting on your daily achievements and challenges allows you to
                   hold yourself accountable. The TellMe App encourages you to review your 
                   progress at the end of each day, helping you identify areas of strength 
                   and a reas where improvement is needed. Whether you’ve hi t your targets or
                    missed some, you'll have the clarity to adjust your actions and stay on track 
                    toward your long-term goals</p>
                    </div>
                    
             </div>
            <div className='user-report'>
              <form>
                <textarea id="how-was-your-day" className='user-report-text-area' placeholder='How was your day write here and save it 🥰🥰🥰'minLength={200}maxLength={2000}rows={5}required></textarea>
                <button type='submit'> <FontAwesomeIcon className='arrow-right'icon={  faArrowRight} /> </button>
                </form>
            </div>
            <div className='contact'id='contact'>
                 <p>Fop any queries or feedback, reach out to us at: <a href="http://www.lezih2500@gmail.com">contact@tellme.com</a></p>
          </div>
    </div>
  </div>
  );
};

export default User;
