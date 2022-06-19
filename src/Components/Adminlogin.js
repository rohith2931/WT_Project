import React from "react";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


function Adminlogin() {
    let { register, handleSubmit, formState: { errors } } = useForm()
    let navigate = useNavigate()
    let validateAdmin = (data) => {
        console.log(data);
        if (data.adminId == "admin" && data.adminPassword == "admin") {
            console.log("admin is already registered")
            navigate('/admin/dashboard')
        }
    }

    return (
        <div>
            <h2 className="display-3 text-center"> Login to Admin Dashboard</h2>

            <div className="Adminlogin-container">
                <form className='Adminlogin-form' onSubmit={handleSubmit(validateAdmin)} >
                    <div className='row'>
                        <input className='Adminlogin-textField col-lg-10 col-md-8 col-sm-12 ' type="text" id="admin-id" placeholder="admin Id" {...register("adminId")} />
                        <input className='Adminlogin-textField col-lg-10 col-md-8 col-sm-12 ' type="password" id="admin-password" placeholder="Password" {...register("adminPassword")} />
                    </div>
                    <input className='Adminlogin-submit' type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Adminlogin;