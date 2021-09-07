import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber,decNumber ,multNumber,divNumber} from './actions/index.js';


const App =()=>{

const myState = useSelector((state)=> state.changeTheNumber);   //gettting state by useSelector
const myOtherState = useSelector((state)=> state.multDivTheNumber);  



const dispatch = useDispatch();         //to triggere the action we need dispatch





  return(
    <>

    <div className="container">
     <h1>Increment and Decrement Counter</h1>
     <h4>Using React and Redux</h4>

     <div className="quantity">
     <a className="quantity_minus" title="Decrement">
       <span onClick={()=>dispatch(decNumber())}>Minus</span></a>

     <input name="quantity" type="text" className="quantity_input" value={myState}/>
     <a className="quantity_plus" title="Inccrement">

       <span onClick={()=>dispatch(incNumber(5))}>Plus</span></a>
     </div>
    </div>








    <div className="container">
     <h1>Multiplication and Division Counter</h1>
     <h4>Using React and Redux</h4>

     <div className="quantity">
     <a className="quantity_multiply" title="multiplying">
       <span onClick={()=>dispatch(multNumber(5))}>Multiply</span></a>

     <input name="quantity" type="text" className="quantity_input" value={myOtherState}/>
     <a className="quantity_divide" title="dividing">

       <span onClick={()=>dispatch(divNumber())}>Divide</span></a>
     </div>
    </div>





    </>
    //hv to call function in dispatch
  )
}

export default App;