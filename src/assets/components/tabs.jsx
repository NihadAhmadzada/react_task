import React, { useState } from "react";
import "./tabs.css";
function Tabs() {
  const data = ["Nihad", "Xezer", "Anar"];
  const [first, setFirst] = useState(data[0]);
  return (
    <>
      <div className="tabs">
        <div className="buttons">
          <button onClick={() => setFirst(data[0])}>Nihad</button>
          <button onClick={() => setFirst(data[1])}>Xezer</button>
          <button onClick={() => setFirst(data[2])}>Anar</button>
        </div>
        <div className="area">
          {first}
        </div>
      </div>
    </>
  );
}

export default Tabs;
