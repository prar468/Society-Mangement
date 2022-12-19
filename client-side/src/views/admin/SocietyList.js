import React from "react";
import "assets/styles/tailwind.css";

import SocietyListTable from "./SocietyListTable";

export default function Tables() {
    return (
        <>
        <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
            <SocietyListTable color="dark" />
        </div>
        </div>
        </>
    );
}
