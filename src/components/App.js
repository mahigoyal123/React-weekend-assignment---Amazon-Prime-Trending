import React, { useState } from 'react'



function App() {

const [text, setText] = useState(localStorage.getItem('value'));

  const handleclick= (e)=> {
    setText(e.target.value);
    localStorage.setItem('value' ,text);
  }

  
  return (
    <div>
      <h2>{text}</h2>
      <input type="text" value={text} onChange={handleclick}/>
      
    </div>
  )
}

export default App


