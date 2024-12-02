import React, { useState } from "react";

const HomeAppliance = () => {
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  return (
    <div className="flex justify-center min-h-[50vh] p-4 pt-6 bg-gray-50">
      <div className="w-full max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="p-6 space-y-2 text-center">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
            Appliance Repair Cost Calculator
          </h2>
          <p className="text-base text-gray-600 md:text-lg">
            Get a price estimate for your appliance repair by filling in the
            details below
          </p>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="device"
              className="block text-sm font-medium text-gray-700"
            >
              Your appliance
            </label>
            <select
              id="device"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-primary-color sm:text-sm"
            >
              <option value="">Device</option>
              <option value="refrigerator">Refrigerator</option>
              <option value="washer">Washing Machine</option>
              <option value="dryer">Dryer</option>
              <option value="dishwasher">Dishwasher</option>
              <option value="oven">Oven</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="issue"
              className="block text-sm font-medium text-gray-700"
            >
              Select the issue
            </label>
            <select
              id="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="">Issue</option>
              <option value="not-working">Not Working</option>
              <option value="noise">Making Noise</option>
              <option value="leaking">Leaking</option>
              <option value="not-heating">Not Heating</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              What&apos;s wrong with your appliance?
            </label>
            <textarea
              id="description"
              placeholder="Please write as many details as possible (e.g. my refrigerator is no longer cooling and is making a loud noise)"
              className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="zipcode"
              className="block text-sm font-medium text-gray-700"
            >
              Your zip code
            </label>
            <input
              id="zipcode"
              type="text"
              placeholder="Zip code"
              className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 max-w-[200px]"
            />
          </div>

          <button
            type="button"
            className="w-full px-4 py-3 text-lg font-semibold text-white transition-colors duration-200 bg-primary-color focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAppliance;
