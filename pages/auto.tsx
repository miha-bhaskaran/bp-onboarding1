import React from 'react';

import { useState, useEffect } from 'react';

function App() {

  const [num, addSubFunc] = useState(1); 


  useEffect(() => {
    const interval = setInterval(() => {
        addSubFunc(num + 1)
      //need to make it increment
    }, 3000);
    return () => clearInterval(interval);
  }, [num]);


  return (
    <>
    <div>{num}</div>
    </>
  );
}
export default App;