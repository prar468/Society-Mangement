import React from "react";
import PropTypes from "prop-types";

// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function ServicesTable({ color }) {
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
                    New Services
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
                    className={"px-6 align-middle"}
                    >
                    S.No.
                    </th>
                    <th   className={"px-6 align-middle text-xs uppercase"}
                    // className={
                    //     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    //     (color === "light"
                    //     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    //     : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    // }
                    >
                    Name
                    </th>
                    <th className={"px-6 align-middle text-xs uppercase"}
                    >
                    contact
                    </th>
                    <th   className={"px-6 align-middle text-xs uppercase"}
                    // className={
                    //     "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    //     (color === "light"
                    //     ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    //     : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                    // }
                    >
                    Charges
                    </th>
                    <th   className={"px-6 align-middle text-xs uppercase"}
                    // className={ 
                        // "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " 
                        // (color === "light"
                        // ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        // : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                        // )
                    // }
                    >
                    Available
                    </th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    1
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    John
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    6757854457
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    500
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    yes
                    </td>

                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    2
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Mr. Verma
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    3456789032
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                   800
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    no
                    </td>
                   
                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    3
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Olivian
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    626689432
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                     1000
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    yes
                    </td>

                </tr>
                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    4
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    mr. sharma
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    7658294956
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    3000
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    yes
                    </td>

                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </>
    );
}

ServicesTable.defaultProps = {
    color: "dark",
};

ServicesTable.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};
