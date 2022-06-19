import './Voterlogin.css'
import React from "react";
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'


function Voterlogin(){
    let {register,handleSubmit,formState:{errors}}=useForm()
    let navigate=useNavigate()
    let  validateVoter =(data)=>{
        console.log(data);
        if(data.voterId=="msi" && data.voterPassword=="123"){
            console.log("aaa")
            navigate('/vote')
        }
    }

    return(
        <div>
            <h2 className="display-3 text-center"> Login to vote</h2>

        <div className="voterlogin-container">
            <form className='voterlogin-form'  onSubmit={handleSubmit(validateVoter)} >
                <div className='row'>
                    <input className='voterlogin-textField col-lg-10 col-md-8 col-sm-12 ' type="text" id="voter-id" placeholder="Voter Id" {...register("voterId")} />
                    <input className='voterlogin-textField col-lg-10 col-md-8 col-sm-12 ' type="password" id="voter-password" placeholder="Password" {...register("voterPassword")} />
                </div>
                <input className='voterlogin-submit' type="submit" />
            </form>
        </div>
        </div>
    );
}
export default Voterlogin;