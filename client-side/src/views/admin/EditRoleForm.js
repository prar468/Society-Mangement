import React from "react";
import PropTypes from "prop-types";
import '../../assets/styles/styles.css';
import { useState , useEffect} from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

export default function EditRoleForm({ color }) {
    const history = useHistory()
    const location = useLocation();
    const roleId = location.state.roleId;
    const url = "http://localhost:8000/role";
    const [role ,setRole] = useState({ 
        name:"", 
        description:"",
    })

    useEffect(()=>{
        const getRole = async()=>{
            const editUrl = url+"/"+ roleId;
            await axios.get(editUrl)
            .then((response)=>{
                const roleDetail = response.data;
                setRole(roleDetail);
            })
            .catch(error => console.error(`Error:${error}`));
        }
        getRole();
    },[roleId]);


    function submit(e){
        e.preventDefault();
        axios.put(url+"/"+roleId,{
        name:role.name,
        description:role.description
        })
        .then(res=>{
        console.log(res.data)
        history.push('/admin/rolesList')
        })
    }

    function handle(e){
        const newData = {...role}
        newData[e.target.name]=e.target.value
        setRole(newData)
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
                    Edit Society
                    </h3>
                    </div>
                </div>
            </div>
            <form onSubmit={(e)=>submit(e)}>
            <div className="container bg-lightBlue-900 text-white p-4">
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Role Name :</label>
                    </div>
                    <div className="col-10">
                        <input type="text" name="name" value={role.name} onChange={(e)=>handle(e)} className="form-control" placeholder="Role name..."></input>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Role Description :</label>
                    </div>
                    <div className="col-10">
                        <textarea type="text" name="description" value={role.description} onChange={(e)=>handle(e)}className="form-control" placeholder="Description"></textarea>
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

EditRoleForm.defaultProps = {
    color: "light",
};

EditRoleForm.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};