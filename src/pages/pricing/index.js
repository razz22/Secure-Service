import ElectricalService from "@/components/pricing/ElectricalService";
import { GarageRepair } from "@/components/pricing/GarageRepair";
import HandymanService from "@/components/pricing/HandymanService";
import HomeAppliance from "@/components/pricing/HomeAppliance";
import Plumbing from "@/components/pricing/Plumbing";
import SmartHome from "@/components/pricing/SmartHome";
import TvMounting from "@/components/pricing/TvMounting";
import React, { useState } from "react";

const index = () => {
  const [selectedTab, setSelectedTab] = useState("Home Appliances");

  const tabs = [
    { id: 1, name: "Home Appliances" },
    { id: 2, name: "TV Mounting" },
    { id: 3, name: "Handyman Services" },
    { id: 4, name: "Plumbing" },
    { id: 5, name: "Garage Repair" },
    { id: 6, name: "Smart Home" },
    { id: 7, name: "Electrical Services" },
  ];

  const renderTabs = () => {
    switch (selectedTab) {
      case "Home Appliances":
        return <HomeAppliance />;
      case "TV Mounting":
        return <TvMounting />;
      case "Handyman Services":
        return <HandymanService />;
      case "Plumbing":
        return <Plumbing />;
      case "Garage Repair":
        return <GarageRepair />;
      case "Smart Home":
        return <SmartHome />;
      case "Electrical Services":
        return <ElectricalService />;
      default:
        return <HomeAppliance />;
    }
  };
  return (
    <div className="mx-auto max-w-container xl:max-w-container-xl 2xl:max-w-container-2xl">
      <div className="flex flex-col items-center w-full gap-2 my-5">
        <h4 className="text-3xl font-bold tracking-wide">
          Affordable Home Care Solutions
        </h4>
        <span className="md:block hidden text-lg text-[#46475C]">
          Carry out essential repairs & projects without breaking the bank{" "}
          <br /> or let our home warranty plans take care of it all. It’s your
          call.
        </span>

        <span className="block md:hidden">
          {" "}
          Carry out essential repairs & projects without breaking the bank or
          let our home warranty plans take care of it all. It’s your call.
        </span>
      </div>
      <div className="w-full h-[50px] border-b flex justify-between items-center flex-wrap">
        {tabs?.map((singleTab, index) => (
          <div
            key={`pricing-${index}`}
            className="text-[#888fad] text-[18px] w-fit cursor-pointer"
            onClick={() => setSelectedTab(singleTab?.name)}
          >
            {singleTab?.name}
          </div>
        ))}
      </div>

      <div>{renderTabs()}</div>
    </div>
  );
};

export default index;
