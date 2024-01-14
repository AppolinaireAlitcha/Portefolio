import { NavLink, useLocation, useRoutes} from "react-router-dom";
import Logo from "./Logo";
import { motion } from "framer-motion";
import {LinkedInIcon, WhatsappIcon, GithubIcon, FacebookIcon, SunIcon, MoonIcon} from "./Icons";
import useThemeSwitcher from "./useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({href, title, className}) => {
  return (
    <NavLink to={href} className={`relative capitalize text-green group ${className}`}>
      {title}
      <span className={`absolute left-0 -bottom-0.5 h-0.5 w-0 bg-dark group-hover:w-full transition-[width] ease duration-300 group active-w-full dark:bg-light ${(useLocation().pathname) === href ? "w-full": "w-0"}`}> &nbsp; </span>
    </NavLink>
  )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {

  return (
    <NavLink to={href} className={`relative capitalize group ${className}`} onClick={toggle}>
      {title}
      <span className={`absolute left-0 -bottom-0.5 h-0.5 w-0 bg-light group-hover:w-full transition-[width] ease duration-300 group active-w-full dark:bg-dark ${(useLocation().pathname) === href ? "w-full": "w-0"}`}> &nbsp; </span>
    </NavLink>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`px-32 py-8 font-medium bg-light w-full flex items-center justify-between relative dark:bg-dark dark:text-light lg:px-16 md:px-12 sm:px-8  ${(useLocation().pathname) === "/" ? "md:pb-20": "pb-12"}`}>        
        <span className={`absolute bottom-9 z-100 rotate-[7deg] left-0 w-full h-[0.5px] bg-dark/10 dark:bg-light/10 hidden md:inline-block ${(useLocation().pathname) === "/" ? "inline-block": "opacity-0"}`}></span>

        <button className="flex-col items-center justify-center hidden lg:flex" onClick={handleBar}>
          <span className={`bg-dark transition-all ease-out duration-300 dark:bg-light rounded-sm block h-0.5 w-6 ${isOpen ? 'rotate-45 translate-y-1' : 'rotate-0 -translate-y-0.5'}`}></span>
          <span className={`bg-dark transition-all ease-out duration-300 my-0.5 dark:bg-light rounded-sm block h-0.5 w-6 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`bg-dark transition-all ease-out duration-300 dark:bg-light rounded-sm block h-0.5 w-6 ${isOpen ? '-rotate-45 -translate-y-1' : 'rotate-0 translate-y-0.5'}`}></span>
        </button>

        <div className="flex items-center justify-between w-full lg:hidden">
          <div className="flex flex-nowrap gap-4 lg:flex-col lg:justify-center">
              <CustomLink href="/" title="Home" className="" />
              <CustomLink href="/apropos" title="à propos" className="" />
              <CustomLink href="/projets" title="Projects" className="" />
              <CustomLink href="/articles" title="Articles" className="" />
          </div>

          <div className="flex justify-center items-center flex-wrap gap-5">
              <motion.a href="www.linkedin.com/in/appolinaire-adande-8b21ba249" target="_blank" className="w-5"
              whileHover={{y: -2}}
              whileTap={{scale: .9}}
              >
                <LinkedInIcon />
              </motion.a  >
              
              <motion.a href="https://wa.me/+22953846658" target="_blank" className="w-5"
              whileHover={{y: -2}}
              whileTap={{scale: .9}}
              >
                <WhatsappIcon />
              </motion.a>

              <motion.a href="www.github.com/Appolinairee" target="_blank" className="w-5"
              whileHover={{y: -2}}
              whileTap={{scale: .9}}
              >
                <GithubIcon />
              </motion.a>

              <motion.a href="https://www.facebook.com/cenac.adande.9" target="_blank" className="w-5" 
              whileHover={{y: -2}}
              whileTap={{scale: .9}}
              >
                <FacebookIcon />
              </motion.a>

              <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-2 flex items-center justify-center rounded-full p-1 border-none">
                  {
                    mode === "dark" ?
                    <SunIcon className={"fill-dark"} /> :
                    <MoonIcon className={"fill-dark"} />
                  }
              </button>
          </div>
        </div>
        
       {
        isOpen ?
        <motion.div
        initial={{scale: 0, opacity:0, x: "-50%", y: "-50%"}}
        animate={{scale: 1, opacity: 1}}
        className="hidden lg:flex justify-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-20 w-[80%] h-[70vh]">
        <div className="flex flex-nowrap items-center gap-5 lg:flex-col justify-center text-light dark:text-dark mb-12">
            <CustomMobileLink href="/" title="Home" className="" toggle={handleBar}/>
            <CustomMobileLink href="/apropos" title="à propos" className="" toggle={handleBar}/>
            <CustomMobileLink href="/projets" title="Projets" className="" toggle={handleBar}/>
            <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleBar} />
        </div>

        <div className="flex justify-center items-center flex-nowrap gap-5 ">
            <motion.a href="" target="_blank" className="w-5"
            whileHover={{y: -2}}
            whileTap={{scale: .9}}
            >
              <LinkedInIcon />
            </motion.a  >
            
            <motion.a href="" target="_blank" className="w-5 text-light rounded-full bg-dark"
            whileHover={{y: -2}}
            whileTap={{scale: .9}}
            >
              <WhatsappIcon />
            </motion.a>

            <motion.a href="" target="_blank" className="w-5 bg-light rounded-full dark:bg-dark"
            whileHover={{y: -2}}
            whileTap={{scale: .9}}
            >
              <GithubIcon />
            </motion.a>

            <motion.a href="" target="_blank" className="w-5" 
            whileHover={{y: -2}}
            whileTap={{scale: .9}}
            >
              <FacebookIcon />
            </motion.a>

            <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className="ml-2 flex items-center justify-center rounded-full p-0.5 border-none bg-light dark:bg-dark ">
                {
                  mode === "dark" ?
                  <SunIcon className={"fill-dark text-xl"} /> :
                  <MoonIcon className={"fill-dark"} />
                }
            </button>
        </div>
      </motion.div>
        : null
       }

        <div className="absolute left-[50%] top-4  -translate-x-[50%] dark:border-light dark:border-[1px] dark:rounded-full  dark:hover:border-none transition-all ease">
          <Logo /> 
        </div>
    </nav>
  )
}

export default NavBar;