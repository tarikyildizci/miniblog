import { Explore, Home, Landing, NotFound, Profile, Redirect } from './pages';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CustomRoute from './components/CustomRoute';
import Navbar from './components/Navbar';
import firebase from './functions/firebase';

function App() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  return (
    <div style={{ height: '100vh' }}>
      <Router>
        <Switch>
          <CustomRoute needsUser={false} path="/" exact>
            <Landing />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/redirect" exact>
            <Redirect />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/home" exact>
            <Home />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/explore" exact>
            <Explore />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/profile" exact>
            <Profile />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/user/:id" exact>
            <Profile />
          </CustomRoute>
        </Switch>
      </Router>
      <Navbar />
    </div>
  );
}

export default App;
