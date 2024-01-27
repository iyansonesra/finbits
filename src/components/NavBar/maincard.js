
import './maincard.css'
import React, {useState, TextInput, View} from 'react';
import maincard_vid from '../../assets/maincard_vid.mp4';



const MainCard = () => {
    const [text,onChangeText] = React.useState('EmailText');
    const [number,onChangeNumber] = React.useState(')');
    return (
        
        <div className='MainCard'>
         <div className='MainText'>
            <div className='Landing'>
                <h2>NEWSLETTERS<br></br>REIMAGINED</h2>
                <p>Weekly market and portfolio reports for YOU, crafted with cutting edge AI</p>
                </div>
                <div className = 'backgroundVideo1'>
                <video src = {maincard_vid} autoPlay loop muted />
                </div>
              
                <div class ="wrapper">
                    <input type ="text" placeholder = "Enter your email"/>
                    <button  onClick={() => document.getElementById('middle').scrollIntoView({behavior:"smooth" ,speed:
                1000})} >
                    <label styles ={{color: "black"}}>GO!</label>
                    </button>
                </div>
            </div>

            
            
            <div className='MiddleSlide'>
                <h1 id = 'middle' className = "CenterTitle"> Choose your sectors </h1>
                <div className = "btnContainer">
                <button class = "button1">Financial  💰</button>
                <button class = "button1">Technology 🤖</button>
                <button class = "button1">Healthcare  🏥</button>
                <button class = "button1">Industrials  🏭</button>
                <button class = "button1">Energy  🔋</button>
                <button class = "button1">Communication  📱</button>
                <button class = "button1">Materials  🪵</button>
                <button class = "button1">Real Estate  🏠</button>
                <button class = "button1">Utilities  ⚡</button>
                <button class = "button1">Consumer Staples  💰</button>
                <button class = "button1">Consumer Discretionary  💰</button>
</div>




            </div>
           
        </div>
    )
}




export default MainCard;