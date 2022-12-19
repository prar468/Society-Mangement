import React from "react";
import "assets/styles/tailwind.css";
import SocietyMembersAllListTable from "./SocietyMembersAllListTable.js";

export default function Tables() {
    return (
        <>
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            <SocietyMembersAllListTable color="dark" />
        </div>
        </div>
        </>
    );
}
