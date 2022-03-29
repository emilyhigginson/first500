import React, {useState} from 'react'

function Word({english, spanish, cardStyle}){
    const [isShowing, setIsShowing] = useState(true);
  
    function handleClick() { 
        setIsShowing(!isShowing)
        }
      
return (
    <article className={cardStyle}>

    <div id="card" onClick={handleClick}> 
    {isShowing ? english : spanish} </div>
    </article>
//     
)}
export default Word
