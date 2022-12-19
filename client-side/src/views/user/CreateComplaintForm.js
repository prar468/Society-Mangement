import React from "react";
import PropTypes from "prop-types";
// import 'bootstrap/dist/css/bootstrap-grid.css';
import '../../assets/styles/styles.css';
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function CreateComplaintForm({ color }) {
    const history = useHistory()
    const url = "http://localhost:8000/complaint/";
    const [complaint ,setComplaint] = useState({ name:"" , description:""})

    function submit(e){
        e.preventDefault();
        console.log(e)
        axios.post(url,{
        title:complaint.title,
        description:complaint.description,
        name:"user name",
        contact:"user contact",
        address:"user address",
        status:"dekhre hai"
        })
        .then(res=>{
        console.log(res.data)
        history.push('/user/complaints')
        })
    }

    function handle(e){
        const newData = {...complaint}
        newData[e.target.name]=e.target.value
        setComplaint(newData)
        console.log(newData)
    }

    return (
    <>
    <div
            className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
            }
        >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3
                        className={
                        "font-semibold text-lg " +
                        (color === "light" ? "text-blueGray-700" : "text-white")
                        }
                    >
                    Create Complaint
                    </h3>
                    </div>
                </div>
            </div>
            {/* here */}
            <form onSubmit={(e)=>submit(e)}> 
            <div className="container p-4">
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Title :</label>
                    </div>
                    <div className="col-10">
                        <input className="form-control" name="title" value={complaint.title} onChange={(e)=>handle(e)} placeholder="Complaint"></input>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Description :</label>
                    </div>
                    <div className="col-10">
                        <textarea className="form-control" name="description" value={complaint.description} onChange={(e)=>handle(e)} placeholder="Describe...."></textarea>
                    </div>
                </div>

                <div className="row py-4 px-2 text-center">
                    <div className="col-5"></div>
                    <button className="col-2 form-control">Submit </button>
                    <div className="col-5"></div>

                </div>
                
            </div>
            </form>
    </div>
        
    </>
    );
}

CreateComplaintForm.defaultProps = {
    color: "light",
};

CreateComplaintForm.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};