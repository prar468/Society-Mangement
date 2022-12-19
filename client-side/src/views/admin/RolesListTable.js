import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useHistory } from "react-router";

export default function RolesListTable({ color }) {
    const history = useHistory()
    const [roles, getRoles] = useState('');
    const url = "http://localhost:8000/role";

    useEffect(()=>{
        getAllRoles();
    },[]);

    const getAllRoles = ()=>{
        axios.get(url)
        .then((response)=>{
            const allRoles = response.data;
            getRoles(allRoles);
            // console.log(allRoles);
        })
        .catch(error => console.error(`Error:${error}`));
    }

    function editRole(e){
        const roleId = e.target.value
        history.push({
            pathname: '/admin/editRole',
            state: {roleId: roleId}
        })
    }

    function deleteRole(e){
        const roleId = e.target.value
        const delUrl = url+"/"+ roleId
        axios.delete(delUrl)
            .then(res=>{
            console.log(res.data)
            window.location.reload(false);
            })
    }

    const rolelist = Array.from(roles);
    const len = rolelist.length
    const arr = rolelist.map((role, index)=>{
        return(
            <tbody>
                    <tr>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {index +1}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {role.name}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {role.description}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {role.created_by}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {role.updated_at}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button className="px-3 py-2" value={role._id} onClick={e=>editRole(e)}>Edit</button>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <button className="px-3 py-2" value={role._id} onClick={e=>deleteRole(e)}>Delete</button>
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
                        Roles List
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
                        S. No.
                        </th>
                        <th
                        className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                        >
                        Role Name
                        </th>
                        <th
                        className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                        >
                        Role Description
                        </th>
                        <th
                        className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                        >
                        Created by
                        </th>
                        <th
                        className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                        >
                        Updated at 
                        </th>
                        <th
                        className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                        >
                        Edit
                        </th>
                        <th
                        className={
                            "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                            (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                        >
                        Delete 
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

RolesListTable.defaultProps = {
    color: "dark",
};

RolesListTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
