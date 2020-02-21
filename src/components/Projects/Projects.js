import React, { useState } from "react";
import "./Projects.css";

import { FaLongArrowAltRight } from 'react-icons/fa';
import useGlobalState from "../../useGlobalState";
import { Link } from "react-router-dom";

function Projects() {
    const globalState = useGlobalState(),
          [projectsText, setProjectsText] = useState({}),
          [previewNum, setPreviewNum] = useState(0),
          lang = globalState.lang.lang;
    fetch("data/lang.json")
      .then(res => res.json())
      .then(res => {
          setProjectsText(res[lang].projects);
      });

    function changePreviewNum() {
        setPreviewNum((previewNum === 0) ? 1 : 0)
    }
    return(
    <div>
        <div id="ndg-info">
            <div id="ndg-info-text">
                {projectsText.description}
            </div>
            <div id="ndg-info-button">
                <button>
                    <div id="ndg-info-button-text">
                        {projectsText.viewProjectsButton}
                    </div>
                    <div id="ndg-info-button-arrow">
                        <FaLongArrowAltRight />
                    </div>
                </button>
            </div>
        </div>
        <div id="projects-container">
            <div id="project-title">
                <div id="title-box">
                <div id="box-1" />
                <div id="yellow-box">
                    <p>{((previewNum === 0) ? projectsText.category0 : projectsText.category1)}</p>
                    <span>{((previewNum === 0) ? projectsText.name0 : projectsText.name1)}</span>
                    <div>
                        <p>
                        {projectsText.viewProjectLink} <FaLongArrowAltRight />
                        </p>
                    </div>
                </div>
                <div id="box-2" />
            </div>
            </div>
            <div id="project-image" style={{backgroundImage: `url(${((previewNum === 0) ? projectsText.image0 : projectsText.image1)})`}} />
        </div>
            <Link to="/projects/explore">
                <button id="explore-button">
                    <div id="ndg-info-button-text">
                        {projectsText.startExploring}
                    </div>
                    <div id="ndg-info-button-arrow">
                        <FaLongArrowAltRight />
                    </div>
                </button>
            </Link>
            <div id="previewNavigatingDiv">
                <button onClick={changePreviewNum} className="previewNavigatingButtons">&lt; {projectsText.back}</button>
                <button onClick={changePreviewNum} className="previewNavigatingButtons">{projectsText.next} &gt;</button>
            </div>
    </div>
    )
}

export default Projects;