import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    en: {
        CURRENT_LANGUAGE : "Hello word!"
    },
    it:{
        CURRENT_LANGUAGE: "Ciao Mondo!"
    }
}


export function DisplayLanguage(){

    const language = useContext(LanguageContext)
    
        return(
            <div>
             {strings[language].CURRENT_LANGUAGE} <h1>{language}</h1>         
            </div>
        )
}