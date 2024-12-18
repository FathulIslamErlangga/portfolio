import React, { useState } from "react";

export const stateToggle = () => {
  const [isToggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle((prev) => !prev);
  return {
    isToggle,
    handleToggle,
  };
};
