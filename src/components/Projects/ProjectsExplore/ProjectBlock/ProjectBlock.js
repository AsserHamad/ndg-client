import React from "react";
import "./ProjectBlock.css";

import { FaLongArrowAltRight } from 'react-icons/fa';

function ProjectBlock(props) {
    const project = props.project, category = props.category, subcategory = props.subcategory, lang=props.lang;
    return(
        <div className={props._className + " project-block-container"}>
            <div className="project-brief">
                <div className="project-brief-categories">
                    <span>{category}</span>
                    <span>{subcategory}</span>
                </div>
                <div className="project-brief-description">
                    {project.description[lang]}
                </div>
                <div className="project-brief-info">
                    {project.title[lang]} - {project.location[lang]} <span><FaLongArrowAltRight /></span>
                </div>
            </div>
            <img src={project.preview} />
        </div>
    )
}

export default ProjectBlock;