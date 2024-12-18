import BriefBio from "@/components/AboutPage/section/BriefBio";
import CoreSkill from "@/components/AboutPage/section/CoreSkill";
import KeyValues from "@/components/AboutPage/section/KeyValues";
import Skill from "@/components/AboutPage/section/Skill";
import React from "react";

const AboutMe = () => {
  return (
    <>
      <BriefBio />
      <Skill />
      <CoreSkill />
      <KeyValues />
    </>
  );
};

export default AboutMe;
