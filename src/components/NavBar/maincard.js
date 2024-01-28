
import './maincard.css'
import React, {useState, TextInput, View} from 'react';
import maincard_vid from '../../assets/maincard_vid.mp4';
import blob_1 from '../../assets/blob_1.png';
import blob_2 from '../../assets/blob2.png';
import right_arrow from '../../assets/right_arrow.png';
import letterX from '../../assets/letter_x.png';
import confetti from '../../assets/purple_confetti.png';


const MainCard = () => {
    const [text,onChangeText] = React.useState('EmailText');
    const [number,onChangeNumber] = React.useState(')');

    const [selectedButtons, setSelectedButtons] = useState([]);

    

    const handleButtonClick = (value) => {
        if (selectedButtons.includes(value)) {
            setSelectedButtons(selectedButtons.filter(item => item !== value));
        } else if (selectedButtons.length < 3) {
            setSelectedButtons([...selectedButtons, value]);
        }
    };





    const [inputValue, setInputValue] = useState('');
    const [stockTickers, setStockTickers] = useState([]);
    const [displayedIndices, setDisplayedIndices] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    const addString = () => {
        // if (inputValue.trim() !== '') {
            const newString = inputValue.toString();
            setStockTickers([...stockTickers, newString]);
            setInputValue('');
        // }
    };

    const handleRemoveElement = (index) => {
        setStockTickers((prevArray) => prevArray.filter((_, i) => i !== index));
    };


    const [response, setResponse] = useState('');

    const callLambdaFunction = async () => {
        try {
        const apiEndpoint = 'https://onvcdkettwlr4ludhpwfmte42a0yujmq.lambda-url.us-east-1.on.aws/'; // https://onvcdkettwlr4ludhpwfmte42a0yujmq.lambda-url.us-east-1.on.aws/
        const requestBody = {};
        selectedButtons.forEach((ticker, index) => {
            requestBody[`key${index + 1}`] = ticker;
        });
        stockTickers.forEach((ticker, index) => {
            requestBody[`key${index + 4}`] = ticker;
        });

        console.log('Request Body:', JSON.stringify(requestBody));

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
            'Content-Type': 'application/json',
            // Add any additional headers if needed
            },
            // Add request body if needed
            body: JSON.stringify(requestBody),
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const data = await response.json();
        console.log('Lambda response:', data);
        } catch (error) {
        console.error('Error calling Lambda function:', error);
        }
    };

//     const generateRows = () => {
//     const rows = [];
//     for (let i = 0; i < stockTickers.length; i += 3) {
//       const rowElements = stockTickers.slice(i, i + 3).map((str, index) => (
//         <th key={index} className="generated-text-box">
//           {str}
//           <button onClick={() => handleRemoveElement(i + index)}>X</button>
//         </th>
//       ));
//       rows.push(<tr className='center' key={i}>{rowElements}</tr>);
//     }
//     return rows;
//   };
const generateTables = () => {
    const tables = [];
    for (let i = 0; i < stockTickers.length; i += 3) {
      const tableElements = stockTickers.slice(i, i + 3).map((str, index) => (
        <th key={index} className="generated-text-box">

          {str}
          <img src = {letterX} alt="logo" id = "letterX" style={{cursor: 'pointer'}} className='letterX' onClick={() => handleRemoveElement(i + index)}></img>
          

        </th>
      ));
      tables.push(
        <table className="center" key={i}>
            <th>{tableElements}</th>
        </table>
      );
    }
    return tables;
  };


 
    return (
        
        <div className='MainCard'>
         <div className='MainText'>
            <div className='Landing'>
                <h2>NEWSLETTERS<br></br>REIMAGINED</h2>
                <p>Weekly market and portfolio reports for YOU, crafted with cutting edge AI</p>
                </div>
                <div className = 'backgroundVideo1'>
                    <div class = 'layer'> </div>
                    <video src = {maincard_vid} autoPlay loop muted />
                </div>
              
                <div className ="wrapper">
                    <input type ="text" placeholder = "Enter your email"/>
                    <button onClick={() => document.getElementById('middle').scrollIntoView(false, {behavior:"smooth",speed: 1000})} >
                    {/* <span>&#8594;</span> */}
                    <img src = {right_arrow} alt="logo" id = "left_logo" className = 'right_arrow'/>
                    </button>
                </div>
            </div>

            
            
            <div className='MiddleSlide'>
                <h1 className = "CenterTitle"> Choose your sectors </h1>
    
                <table className="center">
                    <tr>
                        <th> <button className={selectedButtons.includes('Financial') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Financial')}>Financial 💰</button> </th>
                        <th> <button className={selectedButtons.includes('Technology') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Technology')}>Technology 🤖</button> </th>
                        <th> <button className={selectedButtons.includes('Healthcare') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Healthcare')}>Healthcare 🏥</button> </th>
                    </tr>
                    <tr>
                        <th> <button className={selectedButtons.includes('Industrials') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Industrials')}>Industrials 🏭</button> </th>
                        <th> <button className={selectedButtons.includes('Energy') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Energy')}>Energy 🔋</button> </th>
                        <th> <button className={selectedButtons.includes('Communication') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Communication')}>Communication 📱</button> </th>
                    </tr>
                    <tr>
                        <th> <button className={selectedButtons.includes('Materials') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Materials')}>Materials 🪵</button> </th>
                        <th> <button className={selectedButtons.includes('Real Estate') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Real Estate')}>Real Estate 🏠</button> </th>
                        <th> <button className={selectedButtons.includes('Utilities') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Utilities')}>Utilities ⚡</button> </th>
                    </tr>
                </table>
                <table className="center">
                    <tr>
                        <th> <button className={selectedButtons.includes('Consumer Staples') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Consumer Staples')}>Consumer Staples 💰</button> </th>
                        <th> <button className={selectedButtons.includes('Consumer Discretionary') ? 'button1selected' : 'button1'} onClick={() => handleButtonClick('Consumer Discretionary')}>Consumer Discretionary 💰</button> </th>
                    </tr>
                </table>
                <div class = "blob_container">
                <img src = {blob_1} alt="logo" id = "left_logo" className = 'blobs'/>
                </div>

                <div class = "blob_container2">
                <img src = {blob_1} alt="logo" id = "left_logo" className = 'blobs2'/>
                </div>

                <div class = "blob_container3">
                <img src = {blob_2} alt="logo" id = "left_logo" className = 'blobs3'/>
                </div>

                <div class = "blob_container4">
                <img src = {blob_2} alt="logo" id = "left_logo" className = 'blobs4'/>
                </div>

                <div class = "blob_container5">
                <img src = {blob_1} alt="logo" id = "left_logo" className = 'blobs5'/>
                </div>

                <div className ="wrapper2">
                    <button onClick={() => document.getElementById('last').scrollIntoView(false, {behavior:"smooth",speed: 1000})} className = "wrapper_button_2" >
                    {/* <span>&#8594;</span> */}
                    <img src = {right_arrow} alt="logo" id = "right_arrow2" className = 'right_arrow2'/>
                    </button>
                </div>
               
                <div className='bottomOfPage' id = 'middle'></div>
                
            </div>


            
{/* 
            <div class = "blob_container6">
            <img src = {blob_1} alt="logo" id = "left_logo" className = 'blobs6'/>
            </div> */}

            

            <div className='LastSlide'>
                <h1 className = "CenterTitle"> Enter Your Top Stocks </h1>
                {/* <div class ="wrapper2">

                </div> */}
                {/* <script>
                    // const area = document.querySelector('textarea')
                    // const button = document.querySelector('button')
                    // const saved = []

                    // button.addEventListener('click', () => {
                    // saved.push(area.value)
                    // area.value = ''
                    // console.log(saved)
                    // })
                </script> */}
                {/* <ul>
                    {stockTickers.map((str, index) => (
                    <li key={index}>{str}</li>
                    ))}
                </ul> */}

                
                {/* { <div className='center-elems'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a string"
                />
                <button onClick={addString} style={{cursor: 'pointer'}}>Add String to Array</button>
                { <button onClick={printStockTickers}>print array</button> }
                
                </div> } */}

                <div className ="wrapper4">
                    <input type ="text" value={inputValue} onChange={handleInputChange} placeholder = "Enter a stock"/>
                    <button onClick={addString} className = "add_btn" > Add </button>
                </div>
                {/* <div>
                    <table className="center">
                        {stockTickers.map((str, index) => (
                            
                        <div key={index} className="generated-text-box">
                            {str}
                            <button onClick={() => handleRemoveElement(index)}>X</button>
                        </div>
                        ))}
                    </table>
                    
                </div> */}
                {/* <table className="center">
                    <tbody>{generateRows()}</tbody>
                </table> */}
                <div>
                    {generateTables()}
                </div>

                
                
                <div className ="wrapper3">
                    <button onClick={() => {document.getElementById('last-extra').scrollIntoView(false, {behavior:"smooth",speed: 1000}); }} className = "wrapper_button_3" >{ /* TOOK OUT LAMBDA CALL */}
                    {/* <span>&#8594;</span> */}
                    <img src = {right_arrow} alt="logo" id = "right_arrow3" className = 'right_arrow3'/>
                    </button>
                </div>

                
                <div className='bottomOfPage' id = 'last'/>
            </div>


            <div className='LastSlide-extra'>
                <h1 className = "CenterTitle-final">That's it!<br></br>Check your e-mail for your first finbit! </h1>
                {/* <div class ="wrapper2">

                </div> */}
                {/* <script>
                    // const area = document.querySelector('textarea')
                    // const button = document.querySelector('button')
                    // const saved = []

                    // button.addEventListener('click', () => {
                    // saved.push(area.value)
                    // area.value = ''
                    // console.log(saved)
                    // })
                </script> */}
                {/* <ul>
                    {stockTickers.map((str, index) => (
                    <li key={index}>{str}</li>
                    ))}
                </ul> */}

                
                {/* { <div className='center-elems'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a string"
                />
                <button onClick={addString} style={{cursor: 'pointer'}}>Add String to Array</button>
                { <button onClick={printStockTickers}>print array</button> }
                
                </div> } */}

              
                {/* <div>
                    <table className="center">
                        {stockTickers.map((str, index) => (
                            
                        <div key={index} className="generated-text-box">
                            {str}
                            <button onClick={() => handleRemoveElement(index)}>X</button>
                        </div>
                        ))}
                    </table>
                    
                </div> */}
                {/* <table className="center">
                    <tbody>{generateRows()}</tbody>
                </table> */}
                
                <img src = {confetti} alt="logo" id = "logo" className = 'confetti'/>
                
                
                

                
                <div id = 'last-extra'/>
            </div>
           
        </div>
    )
}

// const el = document.querySelector("#blob_container");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";
// });

// const [selectedButtons, setSelectedButtons] = useState([]);

//     const handleButtonClick = (value) => {
//         if (selectedButtons.includes(value)) {
//             setSelectedButtons(selectedButtons.filter(item => item !== value));
//         } else if (selectedButtons.length < 3) {
//             setSelectedButtons([...selectedButtons, value]);
//         }
//     };



export default MainCard;