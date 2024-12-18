import { useState } from "react";

export const StateToggle = () => {
  const [isToggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => setToggle((prev) => !prev);
  return {
    isToggle,
    handleToggle,
  };
};
