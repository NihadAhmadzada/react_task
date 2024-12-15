import React, { useState } from "react";
import "./drawer.css";
function Drawer() {
  const [drawer, setDrawer] = useState(true);
  return (
    <>
      <button onClick={() => setDrawer(!drawer)}>open</button>
      <div className={`drawer ${drawer ? "isactivate" : ""}`}></div>
    </>
  );
}

export default Drawer;
