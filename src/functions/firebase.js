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

export async function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      return;
    })
    .catch((error) => {
      return error;
    });
}

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

export async function createUserDocument(user) {
  try {
    await firebase.firestore().collection('users').doc(`${user.uid}`).set({
      displayName: user.displayName,
      photoURL: user.photoURL,
      uid: user.uid,
      following: [],
      followers: [],
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function createPost(title, body, author, authorId) {
  try {
    const docRef = await firebase.firestore().collection('posts').add({
      title: title,
      body: body,
      author: author,
      authorId: authorId,
      createdAt: Date.now(),
    });
    firebase.firestore().collection('posts').doc(`${docRef.id}`).update({
      postId: docRef.id,
    });

    return 1;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUserPost(id) {
  try {
    const posts = await firebase
      .firestore()
      .collection('posts')
      .where('authorId', '==', `${id}`)
      .get();
    const data = [];
    posts.forEach((post) => {
      data.push(post.data());
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFollowingUsersPost(id) {
  // 1-No following 2-else
  try {
    const userDoc = await isUserInDatabase(id);
    const followingUsers = userDoc.following;
    if (followingUsers.length === 0) {
      return 1;
    } else {
      const result = await firebase
        .firestore()
        .collection('posts')
        .where('authorId', 'in', followingUsers)
        .orderBy('createdAt')
        .limit(20)
        .get();
      if (result.empty) {
        return 2;
      } else {
        return result.docs;
      }
    }
  } catch (error) {
    console.log(error.message);
    return 2;
  }
}

export async function getSinglePost(postId) {
  try {
    const result = await firebase
      .firestore()
      .collection('posts')
      .doc(`${postId}`)
      .get();

    if (result.exists) {
      return result.data();
    }
    return 1;
  } catch (error) {
    return 1;
  }
}

export async function followUser(follower, followedUser) {
  await firebase
    .firestore()
    .collection('users')
    .doc(`${followedUser}`)
    .update({
      followers: firebase.firestore.FieldValue.arrayUnion(`${follower}`),
    });
  await firebase
    .firestore()
    .collection('users')
    .doc(`${follower}`)
    .update({
      following: firebase.firestore.FieldValue.arrayUnion(`${followedUser}`),
    });
}

export async function unfollowUser(follower, followedUser) {
  await firebase
    .firestore()
    .collection('users')
    .doc(`${followedUser}`)
    .update({
      followers: firebase.firestore.FieldValue.arrayRemove(`${follower}`),
    });
  await firebase
    .firestore()
    .collection('users')
    .doc(`${follower}`)
    .update({
      following: firebase.firestore.FieldValue.arrayRemove(`${followedUser}`),
    });
}
export async function getRandomPosts() {
  const posts = await firebase
    .firestore()
    .collection('posts')
    .orderBy('createdAt')
    .limit(15)
    .get();
  if (!posts.empty) {
    return posts.docs;
  } else {
    return 1;
  }
}
