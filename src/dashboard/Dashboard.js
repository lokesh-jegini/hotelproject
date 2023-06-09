import React, { useState } from "react";
import Hoc from "../hoc/Hoc";
import "./Dashboard.scss";
 function Dashboard(probs) {
  return (
    <div>
      <p onMouseOver={probs.incerement}>${probs.count}</p>
    </div>
  );
}
export default Hoc(Dashboard);
