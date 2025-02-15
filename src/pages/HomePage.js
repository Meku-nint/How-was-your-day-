import React from 'react'
import NavBar from './NavBar'
import './home.css'
const HomePage = () => {
  return (
    <div className='homePage'>
      <NavBar/>
        <div className='tellme'>
          <p>Track Your Progress, Elevate Your Potential</p>
        </div>
             <div className='images'>
                <img src="https://www.proofhub.com/articles/wp-content/uploads/2023/11/Productivity-Tools-That-Will-Make-Your-Life-Much-Easier.jpg" alt="Productivity Tools" width="100%"/>   
            </div>
                <div className='tellme-header'><h3>Tell me Your day</h3><p><strong>your personal productivity tracker</strong></p></div>
        <div className='container'id='about'>
          <div className='use1'>
              <p><strong>✅ Track Your Day</strong></p>
              <p>With the TellMe App, you can effortlessly log what you’ve achieved each day—whether it's a work task, a personal goal, or simply something you enjoy. The app helps you categorize and track your activities in real time, giving you a detailed overview of your day. By visually seeing what you’ve accomplished, you’ll feel motivated to keep up the momentum and make the most out of your time.</p>
          </div>
          <div className='use2'>
              <p><strong>✅ Stay Accountable</strong></p>
              <p>Reflecting on your daily achievements and challenges allows you to hold yourself accountable. The TellMe App encourages you to review your progress at the end of each day, helping you identify areas of strength and areas where improvement is needed. Whether you’ve hit your targets or missed some, you'll have the clarity to adjust your actions and stay on track toward your long-term goals.</p>
          </div>
          <div className='use3'>
              <p><strong>✅ Maximize Productivity</strong></p>
              <p>TellMe is more than just a task tracker. It’s a tool that helps you stay organized, plan your time efficiently, and eliminate distractions. The app empowers you to prioritize tasks based on importance, ensuring that you focus on what matters most. Whether you're managing work tasks, personal projects, or leisure activities, TellMe keeps you organized, motivated, and moving forward with a clear direction. Transform your intentions into tangible results by staying productive every day.</p>
          </div>
        </div>
        <div className='contact'id='contact'>
                 <p>Fop any queries or feedback, reach out to us at: <a href="http://www.lezih2500@gmail.com">contact@tellme.com</a></p>
          </div>
    </div>

  )
}
export default HomePage