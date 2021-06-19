import React, { useState } from 'react'

const useStateWithLocalStorage = localStoragekey=> {
  const [text, setText]= useState(
  localStorage.getItem(localStoragekey) || ''
  );


  React.useEffect(()=> {
    localStorage.setItem(localStoragekey, text);

  }, [text]);

  return [text, setText];
};

function App() {
const [text, setText] = useStateWithLocalStorage(
  'myvalue'
);

  const handleclick= (e)=> {
    setText(e.target.value);
  }

  
  return (
    <div>
      <h2>{text}</h2>
      <input type="text" value={text} onChange={handleclick}/>
      
    </div>
  )
}

export default App
