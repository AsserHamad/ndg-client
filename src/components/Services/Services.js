import React, { useState, useEffect } from 'react';
import './Services.css';
import useGlobalState from "../../useGlobalState";
import services from './dummyServices';

function Services(){
    const globalState = useGlobalState(),
            [servicesText, setServicesText] = useState({}),
            lang = globalState.lang.lang;
      useEffect(() => {
          fetch("/data/lang.json")
            .then(res => res.json())
            .then(res => {
                setServicesText(res[lang].services);
            });
      }, [lang]);
    return(
        <div className="services-container">
            <div className="what-we-do-container">
                <p className="wwd">{servicesText.whatWeDo}</p>
                <div className="todo-brownies">
                    <p>
                        {servicesText.description}
                    </p>
                </div>
            </div>
            <div className="main-services-container">
                {services.map((element) => 
                    <div className="service-div">
                        <p className="service-title">{element.title[lang]}</p>
                        <img src={element.image} />
                        <ul className="list">
                        {element.items[lang].map((item) =>
                            <li>{item}</li>
                        )}
                        </ul>
                    </div>
            )}
                
            </div>
        </div>)
}

export default Services;