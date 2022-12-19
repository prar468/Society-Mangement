import React from "react";
import PropTypes from "prop-types";
import '../../assets/styles/styles.css';
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function CreateEventForm({ color }) {
    const history = useHistory()
    const url = "http://localhost:8000/event/";
    const [event ,setEvent] = useState({ name:"" , description:""})

    function submit(e){
        e.preventDefault();
        console.log(e)
        axios.post(url,{
        title:event.title,
        description:event.description,
        date:event.date,
        time:event.time,
        venue:event.venue,
        image:event.image
        })
        .then(res=>{
        console.log(res.data)
        history.push('/user/events')
        })
    }

    function handle(e){
        const newData = {...event}
        newData[e.target.name]=e.target.value
        setEvent(newData)
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
                    Create Event
                    </h3>
                    </div>
                </div>
            </div>
            {/* here */}
            <form onSubmit={(e)=>submit(e)} >
            <div className="container p-4">
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Title :</label>
                    </div>
                    <div className="col-10">
                        <input className="form-control" name="title" value={event.title} onChange={(e)=>handle(e)}  placeholder="Event title..."></input>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Description :</label>
                    </div>
                    <div className="col-10">
                        <textarea className="form-control" name="description" value={event.description} onChange={(e)=>handle(e)}  placeholder="Describe here"></textarea>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Date :</label>
                    </div>
                    <div className="col-4">
                        <input type="date" className="form-control" name="date" value={event.date} onChange={(e)=>handle(e)}  ></input>
                    </div>
                    <div className="col-2">
                        <label>Time : </label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" name="time" value={event.time} onChange={(e)=>handle(e)}  placeholder="Approx. start time"></input>
                    </div>
                </div>
                <div className="row py-4 px-2 --bs-dark">
                    <div className="col-2">
                        <label>Venue :</label>
                    </div>
                    <div className="col-10">
                        <input className="form-control" name="venue" value={event.venue} onChange={(e)=>handle(e)}  placeholder="Event venue"></input>
                    </div>
                </div>

                <div className="row py-4 px-2 --bs-dark">
                    <div className="col-2">
                        <label>Image</label>
                    </div>
                    <div className="col-10">
                        <input  type="file" className="form-control" name="image" value={event.image} onChange={(e)=>handle(e)} placeholder="Event venue"></input>
                    </div>
                </div>
            </div>

            <div className="row py-4 px-2 text-center">
                    <div className="col-5"></div>
                    <button className="col-2 form-control">Submit</button>
                    {/* <input className="col-2 form-control" type="reset">Clear</input> */}
                    <div className="col-5"></div>
            </div>

            </form>
    </div>
        
    </>
    );
}

CreateEventForm.defaultProps = {
    color: "light",
};

CreateEventForm.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};