import React from "react";
import PropTypes from "prop-types";
import '../../assets/styles/styles.css';
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";


export default function CreateSocietyForm({ color }) {
    const history = useHistory();
    const url = "http://localhost:8000/society";
    const [society ,setSociety] = useState({ 
        name:"", 
        address:"",
        adminName:"",
        contact:""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
        name:society.name,
        address:society.address,
        adminName:society.adminName,
        contact:society.contact
        })
        .then(res=>{
        console.log(res.data)
        history.push('/admin/societyList')
        })
    }

    function handle(e){
        const newData = {...society}
        newData[e.target.name]=e.target.value
        setSociety(newData)
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
                    Create Society
                    </h3>
                    </div>
                </div>
            </div>
            <form onSubmit={(e)=>submit(e)}>
            <div className="container bg-lightBlue-900 text-white p-4">
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Society Name :</label>
                    </div>
                    <div className="col-10">
                        <input type="text" name="name" value={society.name} onChange={(e)=>handle(e)} className="form-control" placeholder="Society name..."></input>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Society Address :</label>
                    </div>
                    <div className="col-10">
                        <textarea type="text" name="address" value={society.address} onChange={(e)=>handle(e)}className="form-control" placeholder="Address"></textarea>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Name :</label>
                    </div>
                    <div className="col-4">
                        <input type="text" name="adminName" value={society.adminName} onChange={(e)=>handle(e)}className="form-control" placeholder="Client name"></input>
                    </div>
                    <div className="col-2">
                        <label>Contact number :  </label>
                    </div>
                    <div className="col-4">
                        <input name="contact" value={society.contact} onChange={(e)=>handle(e)} className="form-control" placeholder="Phone number"></input>
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

CreateSocietyForm.defaultProps = {
    color: "light",
};

CreateSocietyForm.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};