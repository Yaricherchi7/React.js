import React, { useState } from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { LanguageContext } from "./LanguageContext";

export function App() {

  const[language, setLanguage] = useState("en")

  function HandleChangeLanguage(event){
    setLanguage(event.target.value)
  }

    return (
      <div>
        <select value={language} onChange={HandleChangeLanguage}>
        <option value="en">EN</option>
        <option value="it">IT</option>
        </select>
        <LanguageContext.Provider value={language}>
        <DisplayLanguage/>
        </LanguageContext.Provider>
      </div>
    );
}
