import React from 'react'
import './App.css';
import VsjMultipleObject from './components/VsjMultipleObject';
import VsjForm from './components/VsjForm';
import Header from './components/Header';


function App() {

 /* 
 const[num1,setnum]= useState(0);
  const[num2,setnum1]= useState(0);

const addnum=()=>{
  
    
    setnum(num1+1);      
}
const addNum=()=>{
    
  setnum(num1+1);
      
}
const addnum1=()=>{
  
    
  setnum1(num2+1); 
  
}

*/

  return (
    <div className='App'>
      
      
<h1>Form</h1>
<VsjForm/>
<h1>Multiple</h1>
<VsjMultipleObject/>
<h1>Dropdown</h1>

<Header/>



</div>

    /*
    <div className='App'>
      <h2>{num1}</h2>
 
     A <input type="text"  value={num1 } onClick={addnum1}  />
     <br/>
     B <input type="text" value={num1} onClick={addnum1} />
     <br/>
    sum <input value={addnum} />
 
     <br/>

     <button onClick={addNum}>ADD</button>
    </div>

    */
    
  );
};


export default App;
