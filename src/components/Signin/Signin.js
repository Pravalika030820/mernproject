import React from 'react'
import "./Signin.css"
import { useEffect,useState } from 'react'
import userLoginSlice from '../../store/userLoginSlice'
import { useDispatch, useSelector } from 'react-redux'
import {userLoginLifeCycle} from '../../store/userLoginSlice'
import {useForm} from 'react-hook-form' 
import { useNavigate } from 'react-router-dom'

function Signin() {

   let [errMsg,setErrMsg] = useState("")
    let {register,handleSubmit,formState:{errors}}=useForm()

    let {userObj,isSuccess,isError,errorMessage,isPending}=useSelector(state=>state.userLogin)
    let dispatch=useDispatch()
    let navigate = useNavigate();

     // form submit
     const formSubmit = (userCredObj) => {
      console.log(userCredObj)
      let actionObj = userLoginLifeCycle(userCredObj);

      //dispatch action object
      dispatch(actionObj)
    }
  

        // use effect
        useEffect(()=>{
          if(isError === true) {
            setErrMsg(errorMessage)
          }
          else if(isSuccess === true){
            setErrMsg("")

            //navigate to user profile
            navigate("/userprofile")
    
          }
        
        },[isPending, isSuccess, isError])

   

  
    return (
      <div className='container'>
    <p className='display-3 text-center'><b> Login form</b></p>

    {/* Signup form */}
    <div className='row mx-auto'>
      <div className='col-10 col-sm-11 col-md-8 col-lg-6 mx-auto'>

{/* message about duplicate user */}
{errMsg!==""&&(
<p className='alert alert-danger fw-bold display-5'>{errMsg}</p>
)}

    <form onSubmit={handleSubmit(formSubmit)}>
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


      {/* submit button */}
      <button className='btn signup-btn' type='submit'>Login</button>


    </form>

  </div>
  </div>
  </div>
    )
  }
  
export default Signin
