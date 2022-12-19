import React from "react";
import { Link } from "react-router-dom";
import ServicesTable from "./ServicesTable";
export default function ServicesCards() {
return (
    <>
    <main>
      <Link to="ServicesTable">
        <section className="pb-20 bg-blueGray-200 pt-20 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-home"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Maid</h6>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto" onClick={<ServicesTable color="dark" />}>
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-tools"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Plumber</h6>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-plug"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Electrician</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Link>

        

      </main>
    </>
);
}
