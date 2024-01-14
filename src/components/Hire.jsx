// import CircularText from "../assets/circular-text.png";
import { Link } from "react-router-dom";
import { CircularText } from "./Icons";

const Hire = () => {
  return (
    <Link to="mailto:adandappolinaire229@gmail.com" target={"_blank"} className="fixed bottom-4 left-4  md:top-2 md:left-auto md:bottom-auto md:absolute md:right-0 overflow-hidden">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow w-40  md:w-20" alt="Développeur web. App et Site web" />

        <Link to="mailto:adandappolinaire229@gmail.com" target={"_blank"} className=" flex items-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-dark text-light rounded-full w-[60%]  h-[60%] font-bold hover:bg-light hover:text-dark transition-all ease hover:border-dark border-2 dark:bg-light dark:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light md:p-0 md:whitespace-nowrap md:top-[50%] md:left-[50.8%] md:!text-[11px] md:w-[65%] md:h-[65%]">Mission?</Link>
    </Link>
  )
}

export default Hire;