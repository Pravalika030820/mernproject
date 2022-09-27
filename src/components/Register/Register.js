import {useState} from 'react'
import "./Register.css"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import axios from "axios";


function Register() {
  //let {register,handleSubmit}=useForm();
  let { register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //navigate 
  let navigate = useNavigate();
  let [duplicateUser, setDuplicateUser] = useState("")

  //userform submit
  let createNewUser=async(newUserObj) => {
    console.log(newUserObj)
    //new HTTP POST req
    let res = await axios.post("http://localhost:4000/user/create-user", newUserObj);
    console.log(res)

    if(res.data.message === "User Existed"){
      setDuplicateUser("User alreay existed");
    } 
    else{
      //navigate to user loginy
      navigate("/signin")
    }
  }

  return (
    <div className='container'>
      <p className='display-3 text-center'><b> Signup form</b></p>

      {/* Signup form */}
      <div className='row mx-auto'>
        <div className='col-10 col-sm-11 col-md-8 col-lg-6 mx-auto'>
  
  {/* message about duplicate user */}
  {duplicateUser!==""&&(
  <p className='alert alert-danger fw-bold display-5'>{duplicateUser}</p>
)}

      <form onSubmit={handleSubmit(createNewUser)}>
        {/* username */}
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>Username</label>
          <input type="text" id="username" className="form-control" {...register("username", { required: true})}/>
          {errors.username?.type === "required" && (
            <p className="text-danger">*Mandatory field</p>
          )}
        </div>
        {/* password */}
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type="password" id="password" className="form-control" {...register("password", { required: true})}/>
          {errors.password?.type === "required" && (
            <p className="text-danger">*Mandatory field</p>
          )}
        </div>

        {/* dob */}
                <div className='mb-3'>
          <label htmlFor='dob' className='form-label'>Date of Birth</label>
          <input type="date" id="dob" className="form-control" {...register("dob", { required: true})}/>
          {errors.dob?.type === "required" && (
            <p className="text-danger">*Mandatory field</p>
          )}
        </div>

       {/* email */}
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>E-mail ID</label>
          <input type="email" id="email" className="form-control" {...register("email", { required: true})}/>
          {errors.email?.type === "required" && (
            <p className="text-danger">*Mandatory field</p>
          )}
        </div>
        {/* submit button */}
        <button className='btn signup-btn' type='submit'>Signup</button>


      </form>

    </div>
    </div>
    </div>

  )
};

export default Register
