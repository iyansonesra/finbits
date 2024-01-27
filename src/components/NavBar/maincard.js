
import './maincard.css'
import React, {useState, TextInput, View} from 'react';
import wavybottom from '../../assets/wavybottom.png';
import skyline from '../../assets/skyline.png'
import wallSt from '../../assets/wallSt.png'

const MainCard = () => {
    const [text,onChangeText] = React.useState('EmailText');
    const [number,onChangeNumber] = React.useState(')')
    return (
        
        <div className='MainCard'>
         <div className='MainText'>
            <h2>NEWSLETTERS REIMAGINED.</h2>
            <p>Weekly market and portfolio reports for YOU, crafted with cutting edge AI</p>
            </div>
            
            <div class ="wrapper">
                <input type ="text" placeholder = "Enter your email"/>
                <button onClick={() => document.getElementById('middle').scrollIntoView()} >
                   <label>GO!</label>
                </button>
                </div>

            <div className = 'image1'>
             {/* <img src = {wallSt} alt="logo" className = 'wallSt'/>  */}
            </div>
            
            <div className='MiddleSlide'>
                <h1 id = 'middle'> Choose your sectors </h1>
            </div>
           
        </div>
    )
}




export default MainCard;