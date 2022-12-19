import React from "react";

// components

import CardStatsSociety from "components/Cards/CardStatsSociety";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStatsSociety
                  statSubtitle="Registered Members"
                  statTitle="156"
                //   statArrow="up"
                //   statPercent="156"
                //   statPercentColor="text-emerald-500"
                //   statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStatsSociety
                  statSubtitle="Registered complaints"
                  statTitle="8"
                //   statArrow="down"
                //   statPercent="3.48"
                //   statPercentColor="text-red-500"
                //   statDescripiron="Since last week"
                  statIconName="far fa-angry"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStatsSociety
                  statSubtitle="Your pending payments"
                  statTitle="4"
                //   statArrow="down"
                //   statPercent="1.10"
                //   statPercentColor="text-orange-500"
                //   statDescripiron="Since yesterday"
                  statIconName="fas fa-coins"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStatsSociety
                  statSubtitle="Upcoming Events"
                  statTitle="2"
                //   statArrow="up"
                //   statPercent="69"
                //   statPercentColor="text-emerald-500"
                //   statDescripiron="Since last month"
                  statIconName="fas fa-glass-cheers"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
