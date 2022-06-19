import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
const axios = require("axios");

function Addvoter() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("Addvoter");
  },[])

  let validateVoter = (data) => {
    axios.post("http://localhost:2000/create-voter", data)
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <div>
      <div className="voterlogin-container">
        <form className="voterlogin-form" name="addvoter" onSubmit={handleSubmit(validateVoter)}    >
          <div className="row">
            <input className="voterlogin-textField col-lg-10 col-md-8 col-sm-12 " name="id" type="text" id="voter-id" placeholder="Enter voter ID" {...register("voterId", { pattern: /^([A-Z]){3}([0-9]){7}?$/g })} />
            {errors.voterId && (<p className="text-danger text-center"> * voter id not valid</p>)}
            <input className="voterlogin-textField col-lg-10 col-md-8 col-sm-12 " name="pass" type="password" id="voter-password" placeholder="Enter Password" {...register("voterPassword", { min: 6 })} />
            {errors.voterId && ( <p className="text-danger text-center">* Invalid password</p> )}
          </div>
          <input className="voterlogin-submit" type="submit" value={"Add user"} />
        </form>
      </div>
      {/* <button type="button" class="btn btn-primary" id="liveToastBtn">
        Show live toast
      </button>

      <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        <div
          id="liveToast"
          class="toast hide"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">Hello, world! This is a toast message.</div>
        </div>
      </div> */}
    </div>
  );
}
export default Addvoter;
