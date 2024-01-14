import { motion } from "framer-motion";
import React from "react";

const Skill = ({name, x, y}) =>{
    return (
      <motion.div className="flex items-center justify-center rounded-full px-4 py-2 bg-dark text-white font-semibold shadow-2 cursor-pointer absolute shadow-dark dark:bg-light dark:text-dark md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:p-0" 
        whileHover={{scale: 1.05}}
        initial={{x:0, y:0}}
        whileInView= {{x: x, y: y}}
        transition={{duration: 1.5}}
        viewport={{once: false}}
         >
          {name}
         </motion.div>
    )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold w-full text-8xl text-center dark:text-light md:text-6xl xs:text-5xl">Skills</h2>
      <div className="w-full bg-circularBackground rounded-full flex items-center justify-center h-screen border-dark dark:bg-circularBackgroundLight lg:h-[8Ovh] md:h-[60vh] xs:h-[50vh] lg:dark:bg-circularBackgroundLightLg lg:bg-circularBackgroundLg md:bg-circularBackgroundMd md:dark:bg-circularBackgroundLightMd sm:bg-circularBackgroundSm sm:dark:bg-circularBackgroundLightSm">
         <motion.div className="flex relative items-center justify-center rounded-full p-8 bg-dark text-white font-semibold shadow-2 cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:p-2 xs:text-xs" 
        whileHover={{scale: 1.06}}
         >Web</motion.div>

         <Skill name="HTML" x="-22vw" y="2vw" />
         <Skill name="PHP" x="-5vw" y="-13vw" />
         <Skill name="JavaScript" x="20vw" y="6vw" />
         <Skill name="PHP" x="0vw" y="12vw" />
         <Skill name="Laravel" x="-20vw" y="-15vw" />
         <Skill name="Langage C" x="15vw" y="-10vw" />
         <Skill name="MySQL" x="32vw" y="-12vw" />
         <Skill name="NodeJS" x="29vw" y="-3vw" />
         <Skill name="React" x="0vw" y="-22vw" />
         <Skill name="Tailwind CSS" x="-25vw" y="16vw" />
         <Skill name="TDD" x="5vw" y="25vw" />
         <Skill name="CSS" x="18vw" y="18vw" />
      </div>
    </>
  )
}

export default Skills;