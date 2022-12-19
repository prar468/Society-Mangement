import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router";

export default function SocietyListTable({ color }) {

    const [society, getSocieties] = useState('');
    const url = "http://localhost:8000/society";
    const history = useHistory();

    useEffect(()=>{
        getAllSocieties();
    },[]);

    const getAllSocieties = ()=>{
        axios.get(url)
        .then((response)=>{
            const allSocieties = response.data;
            getSocieties(allSocieties);
        })
        .catch(error => console.error(`Error:${error}`));
    }

    function editSociety(e){
        const socId = e.target.value
        history.push({
            pathname: '/admin/editSociety',
            state: {societyId: socId}
        })
    }

    function deleteSociety(e){
        const socId = e.target.value
        const delUrl = url+"/"+ socId
        axios.delete(delUrl)
            .then(res=>{
            window.location.reload(false);
            })
    }

    const societylist = Array.from(society);
    const len = societylist.length;
    
    const arr = societylist.map((soc, index)=>{
        return(
            <tbody>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    {index +1 }
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {soc.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {soc.address}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {soc.adminName}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {soc.contact }
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <a href="/admin/societyMembersList">View members</a>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button className="px-3 py-2" value={soc._id} onClick={e=>editSociety(e)}>Edit</button>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button className="px-3 py-2" value={soc._id} onClick={e=>deleteSociety(e)}>Delete</button>
                    </td>
                </tr>
                </tbody>
        )
    
    })
    
    
    
    
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
                    Society List
                </h3>
                </div>
            </div>
            </div>
            <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                <tr>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    S.No.
                    </th>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    Society name
                    </th>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    Address
                    </th>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    Admin Name
                    </th>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    Admin Contact
                    </th>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    View members
                    </th>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    Edit Society
                    </th>
                    <th
                    className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    }
                    >
                    Delete Society
                    </th>
                </tr>
                </thead> 
                {len ? arr : <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">No entries yet</td>}               
            </table>
            </div>
        </div>
        </>
    );
}

SocietyListTable.defaultProps = {
    color: "dark",
};

SocietyListTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};


