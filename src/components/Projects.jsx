import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import { Link } from "react-router-dom";
import {GithubIcon} from "./Icons";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

import NetBox from "../assets/NetBox.png";
import ImspExplore from '../assets/imspExplore.png';
import TwitterClone from '../assets/twitterClone.png';
import DataSchool from '../assets/dataSchool.png';
import Divisima from '../assets/divisima.png';
import Disciple from '../assets/disciples.png';
import AtounAfrica from '../assets/atounAfrica.png';

const FeaturedProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="w-auto flex items-center justify-center rounded-2xl border border-dark bg-light p-6 relative rounded-br-3xl dark:text-light dark:bg-dark lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 dark:border dark:border-light lg:flex-col">

      <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light xs:w-[100%] xs:h-[101%] xs:-right-1 xs:rounded-[1.5rem]" />

      <Link
        to={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg lg:w-full"
      >
        <motion.img src={img} alt={title} className="w-full h-auto" whileHover={{scale: 1.1}} transition={{duration: 0.3}} />
      </Link>

      <div className="w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <span className="text-primary font-mdium text-xl mt-2">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2 transition-underline ease duration-100"
        >
          <h2 className="w-full my-2 text-left text-3xl font-bold xs:text-sm">
            {" "}
            {title}{" "}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

        <div className="flex gap-5 items-center justify-start mt-2">
          <Link to={github} target="_blank">
            {" "}
            <GithubIcon className="w-10" />{" "}
          </Link>
          <Link
            className="bg-dark rounded-lg font-bold text-light p-2 text-8"
            to={link}
            target="_blank"
          >
            {" "}
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, github, link }) => {
  return (
    <article className="w-full flex items-center flex-col justify-center rounded-2xl border border-dark bg-light p-6 relative dark:text-light dark:bg-dark dark:border-light xs:p-4 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ">

      <Link
        to={link}
        target="_blank"
        className="lg:w-full overflow-hidden rounded-lg"
      >
        <motion.img src={img} alt={title} className="w-full h-auto" whileHover={{scale: 1.1}} transition={{duration: 0.3}} />
      </Link>

      <div className="w-full flex flex-col items-start justify-between">
        <span className="text-primary font-mdium text-xl mt-2 lg:text-lg md:text-base">{type}</span>
        <Link
          to={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-1 text-left text-2xl font-bold xs:text-sm">
            {" "}
            {title}{" "}
          </h2>
        </Link>

        <div className="flex gap-5 items-center w-full justify-between mt-2">
          <Link
            className=" font-semibold underline p-2 text-8 md:text-base"
            to={link}
            target="_blank"
          >
            {" "}
            Visit Project{" "}
          </Link>

          <Link to={github} target="_blank">
            {" "}
            <GithubIcon className="w-8 mr-6 md:w-6" />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TransitionEffect />
      <Layout className="py-16">
        <AnimatedText
          text="Quand l'imagination surpasse la connaissance"
          className="!text-7xl mb-16 sm:!text-6xl xs:!text-4xl"
        />

        <div className="w-fit grid grid-cols-12 sm:flex sm:flex-col gap-24 xl:gap-x-16 md:gap-x-10 md:gap-y-20">
          <div className="col-span-12">
            <FeaturedProject
              type="ReactJS & Laravel API"
              title="NetBoxTV"
              summary="Participation au développement de NetBoxTV, une application de gestion d'abonnement en cours de déploiement pour un distributeur de chaînes. Mon implication principale s'est concentrée sur le front end, utilisant ReactJS et CSS pur."
              img={NetBox}
              github="https://github.com/Appolinairee"
              link="https://github.com/Appolinairee"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              type="JavaScript"
              title="Divisma Clone by Zero"
              img={Divisima}
              github="https://github.com/Appolinairee/divisima"
              link="https://appolinairee.github.io/divisima/"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              type="Laravel, Blade."
              title="Twitter Clone."
              img={TwitterClone}
              github="https://github.com/Appolinairee/LaravelTwitterClone"
              link="https://github.com/Appolinairee/LaravelTwitterClone"
            />
          </div>

          <div className="col-span-12">
            <FeaturedProject
              type="PHP Natif, MySQL, JavaScript"
              title="IMSPExplore"
              summary="Conception de IMSPExplore, un réseau social destiné aux étudiants, facilitant la publication de contenus scientifiques."
              img={ImspExplore}
              github="https://github.com/Appolinairee/ImspExploreF"
              link="https://github.com/Appolinairee/ImspExploreF"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              type="JavaScript && TDD(QUnit)"
              title="TodoAPI."
              img={NetBox}
              github="https://github.com/Appolinairee/TODO-API"
              link="https://github.com/Appolinairee/TODO-API"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              type="JavaScript"
              title="DataSchool."
              img={DataSchool}
              github="https://github.com/Appolinairee/Data-School-23/"
              link="https://appolinairee.github.io/Data-School-23/"
            />
          </div>

          <div className="col-span-12">
            <FeaturedProject
              type="React & Laravel Restful API"
              title="AtounAfrica - Marketplace Multivendor"
              summary="AtounAfrica, une marketplace multivendor au style de moderne de réseau social, connectant les créateurs du Made In Africa et facilitant l'écoulement de leurs créations."
              img={AtounAfrica}
              github="https://github.com/Appolinairee/atounafrica--reactApp"
              link=""
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              type="JavaScript"
              title="Les Disciples du 21ème Siècle"
              img={Disciple}
              github="https://github.com/Appolinairee/disciples"
              link="https://appolinairee.github.io/disciples/"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Projects;
