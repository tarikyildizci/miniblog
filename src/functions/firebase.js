import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyC8C_w-6dzqWhZ7XFx5WV5bEp7aiMgjXiQ',
  authDomain: 'miniblog-01.firebaseapp.com',
  projectId: 'miniblog-01',
  storageBucket: 'miniblog-01.appspot.com',
  messagingSenderId: '753468044906',
  appId: '1:753468044906:web:e6d7eb1eac142fbabf7c13',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export async function login() {
  var provider = new firebase.auth.GoogleAuthProvider();

  const result = await firebase.auth().signInWithPopup(provider);
  try {
    var user = result.user;
    return user;
  } catch (error) {
    var errorMessage = error.message;
    if (errorMessage) console.log(errorMessage);
    return error;
  }
}

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      return;
    })
    .catch((error) => {
      return error;
    });
};

export async function isUserInDatabase(id) {
  try {
    var userDoc = await firebase
      .firestore()
      .collection('users')
      .doc(`${id}`)
      .get();
    return userDoc.data();
  } catch (error) {
    return error;
  }
}

export async function createUserDocument(id) {
  try {
    await firebase.firestore().collection('users').doc(`${id}`).set({
      posts: {},
    });
  } catch (error) {
    return error;
  }
}
