import React,{useState,useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import './Voterlogin.css'

function Dovote(){

    // let [candidates,setCandidates]= useState([])

    // let candidates = []
    // useEffect(()=>{
    //     axios.get('http://localhost:2000/candidates')
    //     .then((res)=>{
    //          console.log(res.data.payload);
    //          candidates = res.data.payload;
    //          setCandidates(res.data.payload);
    //          console.log(candidates);
    //         } )
    //         .catch(err=>console.log(err.message))
    // },[])


    let candidates=[{ candidateName: 'Shoieb Iqbal', partyIcon: 'faBaseball', color: '#3fe4b2', votes: 3},
    { candidateName: 'Kevin', partyIcon: 'faAngry', color: '#ff0000', votes: 1},
    { candidateName: 'Preetham', partyIcon: 'faFan', color: '#0000ff', votes: 2},
    {candidateName: 'Rohith', partyIcon: 'faGlasses', color: '#00ff04', votes: 6}]

    let navigate = useNavigate()

    let {register,handleSubmit,formState:{errors}} = useForm()
    
    let voteGiven=(data)=>{

        axios.put('http://localhost:2000/update-candidate/'+data.voted)
        .then((res)=>{
            console.log(res)
        })
        .catch(err=>console.log(err.message)) 
        
        console.log(data.voted)
        alert("your voted to " + candidates[data.voted].candidateName)
        navigate('/')
    }
    
    return (
        <div className="dovote-container text-center">
            <form  onSubmit={handleSubmit(voteGiven)}>
                <table className="table w-100  text-center">

                    <thead className="table-responsive-xl">
                        <tr>
                        <td className="">Party-Icon</td>
                        <td>Candidate Name</td>
                        <td className="lastRow">Select Vote</td>
                        </tr>   
                    </thead>
                    <tbody>
                { candidates.length>0 &&
                    candidates.map((obj,ind)=><tr key={ind}>
                    <td className="party-icon"> <FontAwesomeIcon icon={All[obj.partyIcon]} style={{color:obj.color}}/> </td>
                    <td className="cadidate-name align-middle">{obj.candidateName}</td>
                    <td className=" text-center align-middle lastRow" > <input type="radio" value={ind}  {...register("voted")} /></td>
                    </tr>)
                }
                </tbody>
            </table>
            <input className="mt-5" type="submit" />
            </form>
        </div>
    )
}

export default Dovote;