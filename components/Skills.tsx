"use client";

import { skillsCategories } from "@/data";
import { GradualSpacing } from "./ui/GradualSpacing";
import { BorderBeam } from "./ui/BorderBeam";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface Skill {
  id: number;
  icon: React.ReactNode;
  text: string;
}

function Skills() {
  const [showAllGeneral, setShowAllGeneral] = useState(false);
  const generalSkillsToShow = showAllGeneral ? skillsCategories.general : skillsCategories.general.slice(0, 6);

  const renderSkillCard = (skill: Skill, index: number) => (
    <motion.div
      key={skill.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="font-cairo bg-[#0E162B] min-w-[35vw] sm:min-w-52 flex-1 relative z-10 flex flex-col items-center justify-center p-5 rounded-sm h-28 text-center border border-transparent hover:border-[#1F2937] border-opacity-50 transition !duration-100"
    >
      <BorderBeam size={80} duration={7} delay={9} />
      <span className="absolute -top-8 !size-16 flex justify-center items-center text-[40px] p-2 rounded-full ">
        {skill.icon}
      </span>
      <span className="text-md sm:!text-xl pt-2">{skill.text}</span>
    </motion.div>
  );

  return (
    <div id="skills">
      <div className="container">
        <GradualSpacing text="My Skills" className="py-10" />

        {/* Frontend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white/90">Frontend Skills</h3>
          <div className="flex gap-x-5 gap-y-10 flex-wrap sm:gap-x-10 sm:gap-y-14 py-5">
            {skillsCategories.frontend.map((skill, i) => renderSkillCard(skill, i))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white/90">Backend Skills</h3>
          <div className="flex gap-x-5 gap-y-10 flex-wrap sm:gap-x-10 sm:gap-y-14 py-5">
            {skillsCategories.backend.map((skill, i) => renderSkillCard(skill, i))}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white/90">Databases</h3>
          <div className="flex gap-x-5 gap-y-10 flex-wrap sm:gap-x-10 sm:gap-y-14 py-5">
            {skillsCategories.databases.map((skill, i) => renderSkillCard(skill, i))}
          </div>
        </div>

        {/* General Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-white/90">General Skills</h3>
          <div className="flex gap-x-5 gap-y-10 flex-wrap sm:gap-x-10 sm:gap-y-14 py-5">
            <AnimatePresence mode="popLayout">
              {generalSkillsToShow.map((skill, i) => renderSkillCard(skill, i))}
            </AnimatePresence>
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllGeneral(!showAllGeneral)}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {showAllGeneral ? (
                <>
                  Show Less <FaChevronUp className="text-sm" />
                </>
              ) : (
                <>
                  Show More <FaChevronDown className="text-sm" />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;

