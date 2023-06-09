import React, { useState } from "react";

import "./Dashboard.scss";
export default function Dashboard(probs) {
  return (
    <div>
      <p onMouseOver={probs.incerement}>${probs.count}</p>
    </div>
  );
}
