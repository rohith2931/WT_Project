import React from "react";
import {useForm} from 'react-hook-form'
function Addvoter(){
    let {register,handleSubmit,formState:{errors}}=useForm()
    let  validateVoter =(data)=>{
        console.log(data);
        alert("Voter added successfully ");
        document.forms["addvoter"].id=null;
    }

    return(
        <div>
        <div className="voterlogin-container">
            <form className='voterlogin-form' name="addvoter"  onSubmit={handleSubmit(validateVoter)} >
                <div className='row'>
                    <input className='voterlogin-textField col-lg-10 col-md-8 col-sm-12 ' name="id" type="text" id="voter-id" placeholder="Enter voter ID" {...register("voterId")} />
                    <input className='voterlogin-textField col-lg-10 col-md-8 col-sm-12 ' name="pass" type="password" id="voter-password" placeholder="Enter Password" {...register("voterPassword")} />
                </div>
                <input className='voterlogin-submit' type="submit" />
            </form>
        </div>
        </div>
    );
}
export default Addvoter;