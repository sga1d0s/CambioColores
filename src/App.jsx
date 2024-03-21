import { useState, useRef, useEffect } from 'react'

import './App.css'

function App() {
  const purpleRef = useRef(null);
  const orangeRef = useRef(null);
  const yellowRef = useRef(null);
  const greenRef = useRef(null);
  const redRef = useRef(null);
  const cyanRef = useRef(null);
  const violetRef = useRef(null);
  const grayRef = useRef(null);
  const meatRef = useRef(null);

  const colors = [
    {
      color:'#D7BDE2',
      ref: purpleRef
    },
    {
      color:'#FA9503',
      ref: orangeRef
    },
    {
      color:'#FAF303',
      ref: yellowRef
    },
    {
      color:'#0AFA03',
      ref: greenRef
    },
    {
      color:'#FA0E03',
      ref: redRef
    },
    {
      color:'#FA03E7',
      ref: violetRef
    },
    {
      color:'#03FAEF',
      ref: cyanRef
    },
    {
      color:'#CACFD2',
      ref: grayRef
    },
    {
      color:'#F4D03F',
      ref: meatRef
    }
  ];
  const [currentColor, setCurrentColor] = useState('#FFFFFF');

  const handleClick = ((index, itemRef) => {
    itemRef.current.style.scale = (0.2);
    setTimeout(() => {
    itemRef.current.style.scale = (1);
      setCurrentColor(colors[index].color); 
    }, 500);
  })

  useEffect(() => {
    console.log(currentColor);
  }, [currentColor])
  

  return (
    <>
      <div className='colors-container'>
        {
          colors.map((item, index) => {
            return <div 
              key={index} 
              ref={item.ref}
              className='color-card' 
              style={{backgroundColor: item.color}} 
              onClick={() => handleClick(index,item.ref)}
              >
            </div>
          })
        }
      </div>
      <div className='colors-container'>
        {
          colors.map((color, index) => {
            return <div key={index} className='color-card' style={{backgroundColor: currentColor}} ></div>
          })
        }
      </div>
    </>
  )
}

export default App
