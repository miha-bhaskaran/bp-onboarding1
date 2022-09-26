import React from 'react';

import { useState } from 'react';

function App() {

  const [num, addSubFunc] = useState(1); 
  const inrement = () => addSubFunc(num + 1);
  const decrement = () => addSubFunc(num - 1); 


  return (
    <>
    <div><button onClick={inrement}>Increase</button></div>
    <div>{num}</div>
    <div><button onClick={decrement}>Decrease</button></div>
    </>
  );
}
export default App;