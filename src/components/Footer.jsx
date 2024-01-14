import { Link } from "react-router-dom"
import Layout from "./Layout";


const Footer = () => {
  return (
    <div className="border-t-2 border-dark pt-12 py-8 text-lg font-medium bg-light dark:bg-dark dark:text-light dark:border-light sm:text-base">
      <Layout className="flex justify-between lg:flex-col lg:items-center lg:justify-center lg:py-6">
        <span>{new Date().getFullYear()} &copy; Tous droits réservés.</span>
        
        <div className="lg:py-2 ">
            Build with <span className="text-primary text-2xl">&#9825;</span>&nbsp; 
            by <Link className="underline underline-offset-2" to="emailto:adandappolinaire@gmail.com" target="_blank">Appolinaire</Link>
        </div>

        <Link className="underline" target="_blank" to="emailto:adandappolinaire229@gmail.com">Me contacter</Link>
      </Layout>
    </div>
  )
}

export default Footer;