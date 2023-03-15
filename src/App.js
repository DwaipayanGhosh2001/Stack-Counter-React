import React, { useState } from "react";
import "./App.css"
function App() {
  const [count, setCount] = useState(0);
const decrease= () => {
  if(count== 0){
  alert("Counter cannot go below 0")
  return;
}
setCount(count-1);
}

const increase= () => {
  if(count> 9){
  alert("Counter cannot go above 10")
  return;
}
setCount(count+1);
}

  return(
<div className="App">
  <header>
    <h1>
      Here is the setcounter Application
    </h1>
    </header>
    <br />
    <h2> The count is {count}</h2>
    <button onClick={()=> setCount(0)}>Reset Counter</button>
    <button onClick={()=> increase()}>Increment Counter</button>
    <button onClick={()=> decrease()}>Decrement Counter</button>
  

</div>
  )

}
export default App;
