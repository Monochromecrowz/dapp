"use client";

import { useState } from "react";
import { config } from "../shared/config";

export default function CrowzAnimation() {
  const [numCrows, setNumCrows] = useState(parseInt(config.numCrows, 10));
  const crowIdToName = {
    0: "one",
    1: "two",
    2: "three",
    3: "four"
  };

  return (
    <>
      {Array.from(Array(numCrows).keys()).map((crowId) => (
        <div className={"bird-container bird-container--" + crowIdToName[crowId]} key={crowId}>
          <div className={"bird bird--" + crowIdToName[crowId]}></div>
        </div>
      ))}
    </>
  );
}
