import { IElements } from "@/utils/interface/elements";
import React from "react";

const Navs = ({ children, className }: IElements) => {
  return <nav className={className}>{children}</nav>;
};

export default Navs;
