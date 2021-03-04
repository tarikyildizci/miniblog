import React, { useEffect } from 'react';
import firebase, {
  isUserInDatabase,
  createUserDocument,
} from '../functions/firebase';
import { useHistory } from 'react-router-dom';

const Redirect = () => {
  var history = useHistory();

  const databaseCheck = async () => {
    var user = firebase.auth().currentUser; //Get user id

    var userDoc = await isUserInDatabase(user.uid); //Check if user has a document db

    if (userDoc) {
      history.push('/home'); //If user exists in db, redirect
    } else {
      createUserDocument(user.uid).then(history.push('/home')); // Else, create document, then redirect
    }
  };

  useEffect(() => {
    databaseCheck();
  }, []);

  return <div>Redirecting...</div>;
};

export default Redirect;
