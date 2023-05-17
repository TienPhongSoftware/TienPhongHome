import React from "react";

interface LoadingComponentProps {
  showLoading?: boolean;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({ showLoading }) => {
  if (!showLoading) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[900] before:bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-slate-800 before:via-slate-800 before:to-slate-900 before:opacity-20 before:z-10">
      <ul className="loading">
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
