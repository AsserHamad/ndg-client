import React from 'react';
import './App.css';
import './pageTransitions/slideTransition.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, withRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Aside from './components/Aside/Aside';
import useGlobalState from './useGlobalState';
import Projects from './components/Projects/Projects';
import ProjectsExplore from './components/Projects/ProjectsExplore/ProjectsExplore';

function App() {
  const globalState = useGlobalState();
  return (
    <div>
      <NavBar />
      <Aside page={globalState.page.page}/>
          <div id="container">
              <AnimatedSwitch
                atEnter={{opacity: 0}}
                atLeave={{opacity: 0}}
                atActive={{opacity: 1}}
              >
                  <Route exact path ="/" component={Homepage} />
                  <Route exact path ="/about" component={About} />
                  <Route exact path ="/projects" component={Projects} />
                  <Route exact path ="/projects/explore" component={ProjectsExplore} />
              </AnimatedSwitch>
          </div>
    </div>
  );
}

export default withRouter(App);
