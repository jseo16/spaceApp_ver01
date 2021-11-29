import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Astronauts from '../screens/Astronauts/Astronauts';

import Home from '../screens/Home/Home';
import Spacecraft from '../screens/Spacecraft/Spacecraft';
function Routing() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* <Switch> */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='spacecraft' element={<Spacecraft />} />
        <Route exact path='astronauts' element={<Astronauts />} />
        {/* </Switch> */}
      </Routes>
    </Router>
  );
}

export default Routing;
