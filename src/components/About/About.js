import React, { useState, useEffect } from "react";
import "./About.css";
import useGlobalState from "../../useGlobalState";
import about from "./dummyabout";

function About() {
  const globalState = useGlobalState(),
    [aboutText, setaboutText] = useState({}),
    lang = globalState.lang.lang;
  useEffect(() => {
    fetch("/data/lang.json")
      .then(res => res.json())
      .then(res => {
        setaboutText(res[lang].about);
      });
  }, [lang]);
  return (
    <div className="about-container">
      <div className="about-us-container">
        <p className={`wwd wwd-${lang}`}>{aboutText.aboutUs}</p>
        <div className={`todo-brownies todo-brownies-${lang}`}>
          <p>{aboutText.corporateOverview}</p>
        </div>
      </div>
      <div className="main-about-container">
        {about.map(element => (
          <div className="about-div">
            <p className={`about-title about-title-${lang}`}>
              {element.title[lang]}
            </p>
            <img src={element.image} />
            <div className={`list list-${lang}`}>
              {element.text[lang].map(item => (
                <li>{item}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;
