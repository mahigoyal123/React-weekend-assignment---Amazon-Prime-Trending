import React, { useState } from 'react'



function App() {

const [text, setText] = useState('');

  const handleclick= (e)=> {
    setText(e.target.value);
    localStorage.setItem('value' ,text);
  }

  
  return (
    <div>
      <h2>{localStorage.getItem('value')}</h2>
      <input type="text" value={text} onChange={handleclick}/>
      
    </div>
  )
}

export default App


export default App
