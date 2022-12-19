import React from "react";
import "assets/styles/tailwind.css";

import PaymentHistoryTable from "./PaymentHistoryTable.js";

export default function PaymentHistory() {
    return (
        <>
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="relative bg-lightBlue-900 pt-16 pb-16 flex content-center items-center justify-center min-h-screen-25">
                    <div className="text-center">
                        <h1 className="text-white font-semibold text-5xl">
                            Payment History
                        </h1>
                    </div>
                </div>
            
                <div className="m-2 relative pt-2 pb-2  content-center items-center justify-center">
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full mb-12 px-4">
                        <PaymentHistoryTable color="dark" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
