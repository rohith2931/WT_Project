import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
const axios = require("axios");

function Addcandidate(){
    let {register,handleSubmit,formState: { errors }} = useForm();
      let validateVoter = (data) => {
        console.log(data)
        axios.post('http://localhost:2000/create-candidate',data)
        .then((res)=>{
            console.log(res.data.message)
        })
        .catch(err=>{
            console.log(err.message)
        })
      };

      useEffect(() => {
        console.log("apple")
      },[])
    
      return (
        <div>
          <div className="voterlogin-container">
            <form className="voterlogin-form" name="addvoter" onSubmit={handleSubmit(validateVoter)}    >
              <div className="row">
                <input className="voterlogin-textField col-lg-10 col-md-8 col-sm-12 " name="id" type="text"  placeholder="Enter Candidate Name" {...register("candidateName", {required :true })} />
                {errors.candidateName && (<p className="text-danger text-center"> * Name is required</p>)}
                <input className="voterlogin-textField col-lg-10 col-md-8 col-sm-12 " name="pass" type="text"  placeholder="Enter Party icon" {...register("partyIcon",{required : true})} />
                {errors.partyIcon && ( <p className="text-danger text-center">* Enter Pary icon</p> )}
                <div className="text-center">
                <p><strong>Select Your party color</strong></p>
                <input className="" name="pass" type="color"   {...register("color")} />
                </div>
              </div>
              <input className="voterlogin-submit" type="submit" value={"Add candidate"} />
            </form>
          </div>
          </div>
        );
          
}
export default Addcandidate;