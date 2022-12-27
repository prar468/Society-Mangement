import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";

export default function Register() {

  const url = "http://localhost:8000/auth/register";
  const [user ,setUser] = useState({ 
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    address:"",
    contact:"",
    gender:"",
  })
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  function submit(e){
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
    if(isSubmit){
      axios.post(url,{
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        password:user.password,
        address:user.address,
        contact:user.contact,
        gender:user.gender
      })
      .then(res=>{
        console.log(res.data)
      }) 
    }
  }

  function handle(e){
    const newData = {...user}
    newData[e.target.name]=e.target.value
    setUser(newData)
    console.log(newData)
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

    if(!values.firstName){
      errors.firstName = "First name is required"
    } else if (values.firstName.length <3){
      errors.firstName = "First name must be more than 3 characters"
    }

    if (values.lastName.length <3){
      errors.lastName = "Last name must be more than 3 characters"
    }

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

    if(!values.contact){
      errors.contact = "Phone number is required"
    } else if (!(values.contact.length ==10)){
      errors.contact = "Invalid contact number"
    }

    if(!values.address){
      errors.address = "Address is required"
    } else if (values.address.length <11){
      errors.address = "Address must be more than 10 characters"
    }
    return errors;
  }


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold py-4">
                  <big>SIGN UP</big>
                </div>
                <form  onSubmit={(e)=>submit(e)}>
                <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name= "firstName"
                      value={user.firstName}
                      onChange={(e)=>handle(e)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="First name"
                    />
                    <p className="text-red-500">{formErrors.firstName}</p>
                  </div>


                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={user.lastName}
                      onChange={(e)=>handle(e)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Last name"
                    />
                    <p className="text-red-500">{formErrors.lastName}</p>
                  </div>

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
                      value={user.email }
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

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      value={user.contact}
                      onChange={(e)=>handle(e)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Phone Number"
                    />
                    <p className="text-red-500">{formErrors.contact}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={user.address}
                      onChange={(e)=>handle(e)}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Address"
                    />
                    <p className="text-red-500">{formErrors.address}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Gender
                    </label>
                    <select onChange={(e)=>handle(e)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-75 ease-linear transition-all duration-150"
                      placeholder="Gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>


                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
