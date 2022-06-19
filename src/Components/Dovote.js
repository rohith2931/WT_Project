import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as All from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'

function Dovote(){

    let candidate=[
        {
            partyIcon:"faCalendar",
            candidateName:"amazon",
            color:"green"
        },
        {
            partyIcon:"faBaby",
            candidateName:"baby",
            color:"red"
        },
        {
            partyIcon:"faCake",
            candidateName:"cake",
            color:"blue"
        }
        
    ]

    let navigate = useNavigate()

    let {register,handleSubmit,formState:{errors}} = useForm()

    let voteGiven=(data)=>{

        console.log(data.voted)
        alert("your voted to " + candidate[data.voted].candidateName)
        navigate('/')
    }
    
    return (
        <div className="dovote-container text-center">
            <form  onSubmit={handleSubmit(voteGiven)}>
                <table className="table  table-hover w-75 text-center">

                    <thead className="table-responsive">
                        <tr>
                        <td>Party-Icon</td>
                        <td>Candidate Name</td>
                        <td className="lastRow">Select Vote</td>
                        </tr>   
                    </thead>
                    <tbody>
                { 
                    candidate.map((obj,ind)=><tr key={ind}>
                    <td> <FontAwesomeIcon icon={All[obj.partyIcon]} style={{color:obj.color}}/> </td>
                    <td>{obj.candidateName}</td>
                    <td className="text-center lastRow" > <input type="radio" value={ind}  {...register("voted")} /></td>
                    
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