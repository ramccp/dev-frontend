import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addToRequests,clearFromRequests } from '../utils/requestSlice';
// /review/:status/:connectionId

function ConnectionRequests (){
const requests = useSelector((store)=>store.request);
const dispatch = useDispatch();

async function handleRequest(status,connectionId){
    const res = await axios.post('http://localhost:3000/connection/review/'+status+'/'+connectionId,{}, { withCredentials: true });
    console.log(res.data);
    dispatch(clearFromRequests(connectionId));
}

async function fetchUserRequests(){
    console.log("JDSJDHJS")
    const res = await axios.get('http://localhost:3000/user/requests',{withCredentials:true})
    console.log(res.data.data);
    dispatch(addToRequests(res.data.data));
}

useEffect(()=>{
    fetchUserRequests();

},[])
if(!requests){
    return <h1>Loading...</h1>
}
if(requests.length===0){
    return <h1>No Pending Requests!</h1>
}
  return (
    <div className="w-8/12 mx-auto my-10 relative">
    <ul className="list bg-base-100 rounded-box shadow-md my-5">
        <li className="p-4 pb-2 text-lg opacity-60 tracking-wide">My Requests</li>
        {requests.map((req, index) => {
          return (
            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                {index<10?"0"+(index+1):index+1}
              </div>
              <div className="flex justify-between gap-4">
                <div className="flex items-center gap-4">
                <div>
                    <img src={req.fromId.avatar} alt="" className='w-10' />
                </div>
                <div className="text-md">{req.fromId.firstName +" "+req.fromId.lastName}</div>
                </div>
                <div className='flex gap-5'>
                    <button className='cursor-pointer' onClick={()=>handleRequest("rejected",req._id)}>❌</button>
                    <button className='cursor-pointer' onClick={()=>handleRequest("accepted",req._id)}>✅</button>
                </div>
              </div>
             
            </li>
          );
        })}
      </ul>
      </div>
  )
}

export default ConnectionRequests