import React, { useState, useEffect } from 'react';
import ContextEg from './ContextEg';

const FunctionalComp =  () => {
  const [name, setName] = useState("Cecilia");
  const handleName = (event) => setName(event.target.value);
 
useEffect( () => console.log("hi"))
useEffect( () => console.log("hiss"))

  return (
    <div>
      <input
        value={name}
        onChange={handleName}
      />
      <ContextEg />
    </div>
  )
};

export default FunctionalComp;