import React from 'react';
import './App.css';
import './pageTransitions/slideTransition.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import { Route, withRouter } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Aside from './components/Aside/Aside';
import useGlobalState from './useGlobalState';
import { AnimatedSwitch, spring } from 'react-router-transition';

function App() {
  const globalState = useGlobalState();
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      scale: `scale(${styles.scale})`
    };
  }
  
  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }
  
  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8)
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1)
    },
  };
  return (
    <div>
      <NavBar />
      <Aside page={globalState.page.page}/>
          <div id="container">
              <AnimatedSwitch
                atEnter={bounceTransition.atEnter}
                atLeave={bounceTransition.atLeave}
                atActive={bounceTransition.atActive}
                mapStyles={mapStyles}
                className="switch-wrapper"
              >
                  <Route exact path ="/" component={Homepage} />
                  <Route exact path ="/about" component={About} />
              </AnimatedSwitch>
          </div>
    </div>
  );
}

export default withRouter(App);
