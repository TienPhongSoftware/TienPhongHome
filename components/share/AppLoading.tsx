import React from "react";
import "../../public/css/globals.css";

interface LoadingComponentProps {
  showLoading?: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ showLoading }) => {
  if (!showLoading) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-40 
    before:bg-white before:absolute before:top-0 before:left-0 
    before:w-full before:h-full before:bg-gradient-to-b 
     before:from-slate-500  before:via-slate-500 
     before:to-slate-500  before:opacity-50 before:z-40"
    >
      <ul className="loading z-50">
        <li className="loadingList"></li>
        <li className="loadingList"></li>
        <li className="loadingList"></li>
        <li className="loadingList"></li>
        <li className="loadingList"></li>
        <li className="loadingList"></li>
        <li className="loadingList"></li>
      </ul>
    </div>
  );
};

export default LoadingComponent;
