import React, { useEffect, useState} from "react";
// import Select from 'react-select';
// import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

// const societyList = [
//     { label: "Ashoka Enclave", value: 1 },
//     { label: "Shalimar", value: 2 },
//     { label: "Eden Garden", value: 3 },
//     { label: "Surbhi Vihar", value: 4 },
// ];



export default function SelectSociety() {

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

    const societylist = Array.from(society);
    console.log(societylist)

    function dashboard(){
            history.push('/user/dashboard')
    }

return (
    <>
    <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                    <div className="btn-wrapper text-center text-black">
                        <h3>hello</h3>
                        <select>
                            {societylist.map( (soc,index)=>
                            (
                                <option value={soc.name}>{soc.name}</option>
                            )
                            )} 
                        </select>
                        
                        
                            <div className="text-center mt-6">
                                <button
                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                onClick={dashboard}
                                >
                                    Submit
                                </button>
                            </div>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
);
}
