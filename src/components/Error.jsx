import React from "react";

export const Error = ({ children }) => {
  return (
    <>
      <div className="text-red-900  font-bold mb-3 rounded">{children}</div>
    </>
  );
};
