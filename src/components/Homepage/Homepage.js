import React, { useState } from 'react';
import './Homepage.css';
import useGlobalState from '../../useGlobalState';

function Homepage() {
  const globalState = useGlobalState();
  const lang = globalState.lang.lang;
  const [pageName, setPageName] = useState("");
  fetch('data/lang.json')
    .then(res => res.json())
    .then(res => setPageName(res[lang].pageNames.home));
  return (
    <div className="videoDiv">
      <video id="background-video" autoPlay loop muted>
        <source src="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default Homepage;