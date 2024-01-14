import { useScroll, motion} from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, adresse, work}) => {
    const ref = useRef(null);

    return <li ref={ref}  className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between text-left lg:w-[80%]">
        <LiIcon reference={ref} />
 
        <motion.div
        initial={{y: 50}}
        whileInView={{y:0}}
        transition={{duration: 1, type: "spring"}}
        >
            <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">  {position} &nbsp; <a className="text-primary capitalize" href={companyLink} target="_blank">@{company}</a>
            </h3>
            <span className="capitalize font-medium dark:text-light/75 text-dark/75 xs:text-base">
                {time} | {adresse}
            </span>

            <p className="font-medium w-full md:text-sm">{work}</p>
        </motion.div>
    </li>
}


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    })

  return (
    <div className="my-40 mx-auto lg:my-30 md:my-20 xs:py-10">
      <h2 className="font-bold w-full text-8xl text-center mb-20 dark:text-light sm:text-xl md:text-6xl xs:text-5xl">Experiences</h2>
      
      <div className="w-[75%] relative mx-auto dark:text-light lg:w-[90%] md:w-full " ref={ref}>

        <motion.div style={{scaleY: scrollYProgress}} className="absolute origin-top bg-dark w-[3px] h-full rounded-4 dark:bg-light md:w-[2px]  "></motion.div>

        <ul className="flex flex-col">
            <Details position="Département développement Alitcha" company="Alitcha" companyLink="" time="2021" adresse="" work="Alitcha, une communauté d'innovation technologique où j'ai exercé mes compétences en tant que membre du département de développement." />

            <Details position="Bénin" company="AtounAfrica" companyLink="www.google.com" time="2022-Present" adresse="AtounAfrica, une marketplace multivendor au style de réseau social, connectant les créateurs du Made In Africa." />

            <Details position="Sèmè-City" company="Ibudo" companyLink="" time="2023" adresse="Idée de startup" work="Incubation de AtounAfrica" />

            <Details position="Professionnel" company="Disciples du 21ème Siècle" companyLink="" time="2023" adresse="Développement d'un site React JS pour présenter les activités du groupe chrétien Les Disciples du 21ème Siècle" />
        </ul>
        
      </div>
    </div>
  )
}

export default Experience;
