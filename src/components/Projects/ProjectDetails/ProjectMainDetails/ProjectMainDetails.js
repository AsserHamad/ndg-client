import React, { useState, useEffect } from 'react';
import './ProjectMainDetails.css';

// import { FaAngleDown } from 'react-icons/fa';

function ProjectMainDetails(props){
    const  project = props.project,
            category = props.category,
            subcategory = props.subcategory,
            projectDetails = props.projectDetails,
            lang = props.lang,
            [currGallery, setCurrGallery] = useState(0);

    function generateImages(){
        let x = [];
        for(let image in project.images)
            x.push(<img key={image} src={project.images[image]} />);
        return x;
    }
    return(
        <div className="main-container">
            <div className="project-details">
                <p className="project-details-title">{projectDetails.projectDetails}</p>
                <p className="description">{project.description[lang]}</p>
                <div className="detail">
                    <p><span className="titles">{projectDetails.owner}: </span>{project.owner[lang]}</p>
                </div>
                <div className="detail">
                    <p><span className="titles">{projectDetails.location}: </span>{project.location[lang]}</p>
                </div>
                <div className="detail">
                    <p><span className="titles">{projectDetails.area}: </span>{project.area}</p>
                </div>
                <div className="detail">
                    <p><span className="titles">{projectDetails.builtUpArea}: </span>{project.builtUpArea}</p>
                </div>
                <div className="detail">
                    <p><span className="titles">{projectDetails.year}: </span>{project.year}</p>
                </div>
            </div>
            <div className="project-media">
                <div className="select">
                    <div className="gallery-navbar">
                        <div onClick={() => setCurrGallery(0)} className={(currGallery==0 ? "navbarItem highlighted-navbar": "navbarItem" )}>
                            01. Images
                        </div>
                        <div onClick={() => setCurrGallery(1)} className={(currGallery==1 ? "navbarItem highlighted-navbar": "navbarItem" )}>
                            02. Videos
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <div style={{display: (currGallery === 1) ? 'none' : 'block'}}>
                        <p className="titles project-details-title">{projectDetails.gallery}</p>
                        <div className="image-box">
                            <div className="image-div">
                                {generateImages()}
                            </div>
                            {/* <img src={project.images[0]} /> */}
                        </div>
                    </div>
                    <div style={{display: (currGallery === 0) ? 'none' : 'block'}}>
                        videos!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectMainDetails;