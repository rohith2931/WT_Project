import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Voterlogin.css'
function Pool(){

  let [candidates,setCandidates] =useState([])

    useEffect(() =>{
      axios.get("http://localhost:2000/candidates")
      .then(res=>{
        console.log(res.data.payload);
        candidates = res.data.payload;
        setCandidates(res.data.payload);
        console.log(candidates);
      })
      .catch(err=>console.log(err.message))
    },[])


    let maxVotes=20
  return(
    <div className="voterlogin-container">
          <div className=" voterlogin-form">
            {candidates.length && candidates.map((obj) => (<div className=" mt-4">
            <p> <strong> {obj.candidateName}</strong> votes:{obj.votes}  </p>
            <div className=" text-center mx-auto">
            <input className=" mb-2"  type="range"   id="obj.id"  max={maxVotes}  min={0}  value={obj.votes}  />
            </div>
          </div>
            ))}
    </div>
    </div>
  )
}

export default Pool;