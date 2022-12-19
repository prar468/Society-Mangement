import React from "react";
import "assets/styles/tailwind.css";
import SocietyMembersListTable from "./SocietyMembersListTable.js";

export default function Tables() {
    return (
        <>
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            <SocietyMembersListTable color="dark" />
        </div>
        </div>
        </>
    );
}
