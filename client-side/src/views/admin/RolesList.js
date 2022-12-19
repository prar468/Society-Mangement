import React from "react";
import "assets/styles/tailwind.css";
// components
import RolesListTable from "./RolesListTable";

export default function Tables() {
    return (
        <>
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            <RolesListTable color="dark" />
        </div>
        </div>
        </>
    );
}
