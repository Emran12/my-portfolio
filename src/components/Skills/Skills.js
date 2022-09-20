import React from "react";
import SkillDetail from "../SkillDetail";
import skills from "./skills.json";

const Skills = () => {
  return (
    <div className="" id="skills">
      <h1 className="text-3xl text-green-500 text-center font-bold mt-10">
        Skills
      </h1>
      <div className="mx-10 px-10 ">
        <h1 className="text-3xl text-green-500 mb-8 font-bold mt-10">
          Technologies
        </h1>
        <div className="flex flex-wrap gap-5 ">
          {skills[0].map((skill) => (
            <SkillDetail key={skill.id} skill={skill}></SkillDetail>
          ))}
        </div>
        <h1 className="text-3xl text-green-500 mb-8 font-bold mt-10">Tools</h1>
        <div className="flex flex-wrap gap-5 ">
          {skills[1].map((skill) => (
            <SkillDetail key={skill.id} skill={skill}></SkillDetail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
