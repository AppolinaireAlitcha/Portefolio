import Layout from "../components/Layout";
import Profile from "../assets/developer-pic-1.png";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import Hire from "../components/Hire";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import AfricaLight from "../assets/africaLight.png";
import TransitionEffect from "../components/TransitionEffect";

const Home = () => {
  return (
    <main className="flex items-center text-dark 
     w-full dark:bg-dark">
        <TransitionEffect />
        <Layout className="pt-0 flex items-center dark:text-light lg:flex-col !md:p-0">
            <div className="w-1/2 lg:w-2/3 md:w-full ">
                <img src={Profile} className="h-auto " alt="Profile de ADANDE Appolinaire" />    
            </div>    

            <div className="w-1/2 flex flex-col items-stretch  justify-center h-fit lg:w-full">
                <AnimatedText text="Imagination, Code, Projet!" className="!text-6xl text-left dark:text-light xl:!text-5xl lg:!text-center sm:!text-3xl lg:align-center" />

                <p className="my-4 font-medium text-base lg:text-center md:text-sm">ADANDE Appolinaire, développeur web full-stack. Fort de 3 années d'expériences diverses, je suis spécialisé ReactJS et Laravel. Vous avez un projet web ambitieux qui se distingue? Contactez-moi maintenant!</p>
            
                <div className="flex gap-5 items-center justify-start lg:justify-center">
                  <Link href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" className="bg-dark text-light px-4 py-2  hover:bg-white hover:border-dark hover:text-dark border-[1px] round  rounded-lg font-bold transition flex gap-3 items-center dark:bg-light dark:text-dark md:text-sm" download="CV(ADANDE Appolinaire).pdf" rel="noopener noreferrer">Voir le CV <FaArrowUpRightFromSquare /></Link>

                  <Link target={"_blank"} to="mailto:adandappolinaire229@gmail.com" className=" ml-4 text-lg font-medium capitalize underline">Contacts</Link>
                </div>
            </div>

            
             <Hire />

            <div className="absolute bottom-8 right-4 w-44 lg:w-30 lg:bottom-0 lg:hidden">
              <img src={AfricaLight} alt="L'Afrique, le socle de la vision" />
            </div>
        </Layout> 
    </main>
  )
}

export default Home;
