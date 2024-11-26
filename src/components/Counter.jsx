import React, { useState } from 'react'
// for accessing state from stor 
// react redux hook 
import { useSelector , useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/CounterSlice'
// 




function Counter() {

  const [amount  , setAmount]=useState(0)
    const dispatch = useDispatch()

   const {count} = useSelector(state=>state.counterReducer)
  
  const  handleIncrementByAmount=()=>{

      if(amount){
        dispatch(incrementByAmount(Number(amount)))
      }
      else
      {
        alert("enter the amount to increment counter value")
      }


  }
  
  return (
    <>
    <div className='container d-flex flex-column align-item-center mt-5' id='container'>
        <h3 className='text-center'>Counter App</h3>
        <div className='w-100 d-flex align-items-center justify-content-center'>
            <div className='border border-1 border-dark rounded p-3' style={{width:'400px' , height:'auto'}}>

                <h4 className='text-center'>{count}</h4>

                <div className='d-flex align-item-center justify-content-arround m-5'>
                    <button onClick={()=>dispatch(increment())} className='btn btn-warning me-1'>increment</button>
                    <button onClick={()=>dispatch(reset())}  className='btn btn-light'>reset</button>
                    <button onClick={()=>dispatch(decrement())}  className='btn btn-success ms-1'>decrement</button>


                </div>

                <div className='d-flex'>
                        <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control'  placeholder='search increment counter ammount'/>
                        <button onClick={handleIncrementByAmount} className='btn btn-primary ms-3'>inc</button>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Counter