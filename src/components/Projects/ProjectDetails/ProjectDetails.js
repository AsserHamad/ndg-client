import React from 'react';
import './ProjectDetails.css';
import useGlobalState from '../../../useGlobalState';
import projects from '../dummyProjects';

function ProjectDetails(props){
    const globalState = useGlobalState(),
          lang = globalState.lang.lang;
    const [project, category, subcategory] = getProject();
  
    function getProject(){
        if(props.location.projectBlock){
            return [props.location.projectBlock.project, props.location.projectBlock.category, props.location.projectBlock.subproject];
        } else {
            let proj = projects.projects.filter((proj) => proj.id==props.match.params.id)[0];
            return [proj, projects.categories[lang][proj.category], projects.subcategories[lang][proj.subcategory]]
        }
    }

    return(
        <div className="project-details-container">
            <div className="project-title">
                {project.title[lang]}
            </div>
            <div className="video-container">
                <video className="background-video" autoPlay loop muted>
                <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default ProjectDetails;