import React from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";

export class App extends React.Component {
  state = {
    language: 'en'
  };

  handleChangeLanguage = (event) => {
    this.setState({
      language : event.target.value
    });
  };

  render() {
    return (
      <div className="border-2 p-5">
        <select className="m-5"
          value={this.state.language}
          onChange={this.handleChangeLanguage}
        >
          <option value='en'>English</option>
          <option value='it'>Italiano</option>
        </select>

          <LanguageContext.Provider value={this.state.language}>
          <Container>
            <DisplayLanguage />
          </Container>
        </LanguageContext.Provider> 
      </div>
    );
  }
}
