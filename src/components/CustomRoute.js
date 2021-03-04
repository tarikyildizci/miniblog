import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from '../functions/firebase';

const CustomRoute = ({ needsUser, children, ...rest }) => {
  var user = firebase.auth().currentUser;
  return (
    <div>
      {needsUser ? (
        //user only route
        user ? (
          <Route {...rest}>{children}</Route>
        ) : (
          <Redirect to="/" />
        )
      ) : //non-user only route
      user ? (
        <Redirect to="/home" />
      ) : (
        <Route {...rest}>{children}</Route>
      )}
    </div>
  );
};

export default CustomRoute;
