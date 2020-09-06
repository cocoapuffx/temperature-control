import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColor, setTemperatureColor] = useState('warm');
    
  const increaseTemperature = () => {

    if(temperatureValue === 40) return;

    const newTemperature = temperatureValue + 1;

    setTemperatureValue(newTemperature);

    while (document.body.classList.length > 0) {
      document.body.classList.remove(document.body.classList.item(0));
    }

    if(newTemperature >= 30){
      //document.body.style = 'background: #f00a0a;';
      document.body.classList.add('background-hot');
      setTemperatureColor('hot');
    } else if(newTemperature >= 15){
      //document.body.style = 'background: #5d567c;';
      document.body.classList.add('background-warm');
      setTemperatureColor('warm');
    }else{
      //document.body.style = 'background: #0022c9;';
      document.body.classList.add('background-cold');
      setTemperatureColor('cold');
    }
  };
  
  const decreaseTemperature = () => {

    if(temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;

    setTemperatureValue(newTemperature);

    while (document.body.classList.length > 0) {
      document.body.classList.remove(document.body.classList.item(0));
    }

    if(newTemperature >= 30){
      //document.body.style = 'background: #f00a0a;'; 
      document.body.classList.add('background-hot');
      setTemperatureColor('hot');
    } else if(newTemperature >= 15){
      //document.body.style = 'background: #5d567c;';
      document.body.classList.add('background-warm');
      setTemperatureColor('warm');
    }else{
      //document.body.style = 'background: #0022c9;';
      document.body.classList.add('background-cold');
      setTemperatureColor('cold');
    }
  };

  
	return (
    <div class='hero-text'>
     Temperature Control
     <div className='app-container'>
       <div className='temperature-display-container'>
         <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className='button-container'>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
    </div>
  );
};



export default App;
