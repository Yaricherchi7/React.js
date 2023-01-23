import React from "react";
import { LanguageContext } from "./LanguageContext";

const strings = {
    en: {
        CURRENT_LANGUAGE : "Hello word!"
    },
    it:{
        CURRENT_LANGUAGE: "Ciao Mondo!"
    }
}


export class DisplayLanguage extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    { language =>{
                        return <div> {strings[language].CURRENT_LANGUAGE}</div>
                    } }
                </LanguageContext.Consumer>
            </div>
        )
    }
}