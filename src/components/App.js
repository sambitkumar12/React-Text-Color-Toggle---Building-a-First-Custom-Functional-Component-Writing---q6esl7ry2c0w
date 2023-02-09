import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
  const [color, setColor] = useState('red');
  const [fontStyle, setFontStyle] = useState('normal');

  const handleClick = () => {
    if (color === 'red') {
      setColor('blue');
      setFontStyle('italic');
    } else {
      setColor('red');
      setFontStyle('normal');
    }
  };
  return (
    <div id="main">
      <p>Newton School</p>
      <button id='button' onClick={handleClick}>Change Style</button>
    </div>
  );
};

export default App;
