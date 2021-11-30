import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Home from '../screens/Home/Home';
import Astronauts from '../screens/Astronauts/Astronauts';
import Spacecraft from '../screens/Spacecraft/Spacecraft';

function Routing() {
  const MENU_ITEMS = ['spacecraft', 'astronauts'];
  return (
    <Router>
      <Navigation menu={MENU_ITEMS} />
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
