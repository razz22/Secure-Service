import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-white dark:bg-gray-900">
      <img src="/images/logo.png" className="w-[200px]" alt="" />
      <div className="loader" />
      {/* Add your spinner or animation */}
    </div>
  );
};

export default Loading;
