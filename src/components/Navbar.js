import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import PersonIcon from '@material-ui/icons/Person';
const Navbar = () => {
  return (
    <BottomNavigation
      showLabels
      style={{ width: '100%', position: 'fixed', bottom: 0 }}
    >
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Explore"
        value="explore"
        icon={<ExploreIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  );
};

export default Navbar;
