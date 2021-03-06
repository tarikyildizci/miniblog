import React, { useEffect, useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory, useLocation } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';

const Navbar = () => {
  var location = useLocation();
  var history = useHistory();

  const [value, setValue] = useState();

  const changePage = (url) => {
    var path = location.pathname;
    path = path.substring(1);
    if (path !== url) {
      history.push(`/${url}`);
    }
  };

  useEffect(() => {
    var path = location.pathname;
    path = path.substring(1);
    setValue(path);
  }, [location]);

  return (
    <BottomNavigation
      showLabels
      style={{ width: '100%', position: 'fixed', bottom: 0 }}
      value={value}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        onClick={() => {
          changePage('home');
        }}
      />
      <BottomNavigationAction
        label="Explore"
        value="explore"
        icon={<ExploreIcon />}
        onClick={() => {
          changePage('explore');
        }}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon />}
        onClick={() => {
          changePage('profile');
        }}
      />
      <BottomNavigationAction
        label="Write"
        value="write"
        icon={<CreateIcon />}
        onClick={() => {
          changePage('write');
        }}
      />
    </BottomNavigation>
  );
};

export default Navbar;
