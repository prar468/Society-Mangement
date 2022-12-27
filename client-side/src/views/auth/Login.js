import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  const url = "http://localhost:8000/auth/login";

  const [user ,setUser] = useState({ email:"" , password:""})
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const history = useHistory();
  function submit(e){
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
    if(isSubmit){
      axios.post(url,{
        email:user.email,
        password:user.password
      })
      .then(res=>{
        const resData = res.data
        const accessToken = resData.accessToken;
        const userName = resData.user.name;
        localStorage.setItem('Name', userName);
        localStorage.setItem('AccessToken', accessToken);
        history.push('/auth/selectSociety')
      })
    }
  }

  function handle(e){
    const newData = {...user}
    newData[e.target.name]=e.target.value
    
    setUser(newData)
    // console.log(newData)
  }

  useEffect(()=>{
    console.log("hello")
    console.log(formErrors)
    if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(user)
    }
  },[formErrors]);

  const validate = (values) =>{
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.email){
      errors.email = "Email is required"
    } else if(!regex.test(values.email)){
      errors.email = "Invalid email format"
    }
    if(!values.password){
      errors.password = "Password is required"
    } else if (values.password.length <4){
      errors.password = "Password must be more than 4 characters"
    }
    return errors;
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold font-size-40% ">
                  <h1 className="fs-1 py-4">SIGN UP</h1>
                </div>
                <form onSubmit={(e)=>submit(e)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={(e)=>handle(e)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                    <p className="text-red-500">{formErrors.email}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={(e)=>handle(e)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                    <p className="text-red-500">{formErrors.password}</p>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
