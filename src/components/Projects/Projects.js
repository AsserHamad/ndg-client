import React, { useState, useEffect } from "react";
import "./Projects.css";

import { FaLongArrowAltRight } from 'react-icons/fa';
import useGlobalState from "../../useGlobalState";
import { Link } from "react-router-dom";
import dp from "./dummyProjects";

function Projects() {
    const projects = dp.projects, categories = dp.categories, subcategories = dp.subcategories;
    const globalState = useGlobalState(),
          [projectsText, setProjectsText] = useState({}),
          [previewNum, setPreviewNum] = useState(0),
          lang = globalState.lang.lang;
    useEffect(() => {
        fetch("/data/lang.json")
          .then(res => res.json())
          .then(res => {
              setProjectsText(res[lang].projects);
          });
    }, [])
    function changePreviewNum() {
        setPreviewNum((previewNum + 1) % 3);
    }
    return(
    <div>
        <div id="ndg-info">
            <div id="ndg-info-text">
                {projectsText.description}
            </div>
            <Link id="ndg-info-button" className="link" to="/projects/explore">
                <button>
                    <div id="ndg-info-button-text">
                        {projectsText.viewProjectsButton}
                    </div>
                    <div id="ndg-info-button-arrow">
                        <FaLongArrowAltRight />
                    </div>
                </button>
            </Link>
        </div>
        <div id="projects-container">
            <div id="project-title">
                <div id="title-box">
                <div id="box-1" />
                <div id="yellow-box">
                    <p>{categories[lang][projects[previewNum].category]}</p>
                    <span>{projects[previewNum].title[lang]}</span>
                    <div>
                    <Link className="link" to={{
                        pathname: `/projects/${projects[previewNum].id}`,
                        projectBlock:{
                            project: projects[previewNum],
                            category: categories[lang][projects[previewNum].category],
                            subcategory: subcategories[lang][projects[previewNum].subcategory]
                        }
                    }}>
                        <p>
                        {projectsText.viewProjectLink} <FaLongArrowAltRight />
                        </p>
                    </Link>
                    </div>
                </div>
                <div id="box-2" />
            </div>
            </div>
            <div id="project-image" style={{backgroundImage: `url(${projects[previewNum].preview})`}} />
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