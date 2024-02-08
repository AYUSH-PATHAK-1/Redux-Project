import React from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const content = () => {
  const amount=useSelector(state=>state.amount)
  const dispatch=useDispatch();
  const {depositeMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch)
  return (
   <>
 <div className='flex justify-center items-center h-screen'>
  <div className='flex-col'>
    <div className='text-center items-center mb-5'>
    <button disabled={true} className='bg-yellow-200 rounded-xl border-2 text-4xl p-5 border-black'>
        Rupees {amount} /-
      </button>
    </div>
  <div className='border-[1px] rounded-lg border-black p-5 bg-slate-200'>
    <div className='flex flex-col'>
      <div>
        <h1 className='text-6xl'>Deposite / Withdraw</h1>
      </div>
      <div className='gap-5 mt-5 justify-between flex'>
        <button className='p-2 cursor-pointer text-2xl' onClick={()=>{withdrawMoney(100)}}><FaCircleMinus /></button>
        <button className=' p-2 cursor-pointer text-2xl' onClick={()=>{depositeMoney(100)}}><FaPlusCircle /></button>
      </div>
    </div>
    </div>
  </div>
</div>

   </>
  )
}

export default content