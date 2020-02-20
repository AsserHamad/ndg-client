import React from "react";
import "./Projects.css";

import { FaLongArrowAltRight } from 'react-icons/fa';

function Projects() {
    return(
    <div>
        <div id="ndg-info">
            <div id="ndg-info-text">
                As a multidisciplinary firm, we maintain considerable experience, skills and resources to undertake a wide variety of projects.
                NDG was started in 1999 and serves a local and national client base.
                Customers recognize the firm’s ability to provide and coordinate a broad spectrum of specialized professional services through our highly qualified staff 
                and the use of an extensive professional
            </div>
            <div id="ndg-info-button">
                <button>
                    <div id="ndg-info-button-text">
                        View All Projects
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
                    <p>URBAN DESIGN</p>
                    <span>SunPark (Maasara)</span>
                    <div>
                        <p>
                            VIEW PROJECT <FaLongArrowAltRight />
                        </p>
                    </div>
                </div>
                <div id="box-2" />
            </div>
            </div>
            <div id="project-image">
            </div>
        </div>
    </div>
    )
}

export default Projects;