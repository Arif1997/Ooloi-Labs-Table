import { CgArrowLongUp, CgArrowLongDown } from "react-icons/cg";
import React from "react";
function SortIconComponent() {
  return (
    <div
      style={{
        padding: 0,
        margin: '0 0 0 10px',
        width: 'auto',
      }}
    >
      <CgArrowLongDown
        style={{
          width: 'auto',
          height: "15.38px",
          padding: "0",
          margin: 0,
          
        }}
      />
      <CgArrowLongUp
        style={{
          width: "auto",
          height: "15.38px",
          padding: "0",
          margin: 0,
          position: 'relative',
          left: '-8px'
        }}
      />

    </div>
  );
}

export default SortIconComponent;
