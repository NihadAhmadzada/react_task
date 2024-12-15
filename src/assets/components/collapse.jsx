import React, { useState } from "react";
import "./collapse.css";

function Collapse() {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <div className="collapse" onClick={() => setCollapse(!collapse)}></div>
      <div className={`coll ${collapse ? "isactive" : ""}`}>
        <p>Nihad</p>
        <p>Xezer</p>
        <p>Anar</p>
      </div>
    </>
  );
}

export default Collapse;
