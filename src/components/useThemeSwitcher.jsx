import { useEffect } from "react";
import { useState } from "react";

const useThemeSwitcher = () => {

    const preferDarkQuery = "(prefer-color-sheme: dark)";
    const [mode, setMode] = useState("dark");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const usePref = window.localStorage.getItem("theme");

        const handleChange = () =>{
            let check;
            if(usePref){
                check = usePref === "dark" ? "dark" : "light";
                setMode(check);
            }else{
                check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
            }

            if(check === "dark")
                    document.documentElement.classList.add("dark");
                else
                    document.documentElement.classList.remove("dark");
        }

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);


    useEffect(() => {
        if(mode === "dark"){
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }else{
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);


    return [mode, setMode];
}

export default useThemeSwitcher;