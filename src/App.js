import {
  Explore,
  Home,
  Landing,
  NotFound,
  Profile,
  Redirect,
  Write,
  User,
  Post,
} from './pages';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect as RouterRedirect,
} from 'react-router-dom';
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
            <Navbar />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/explore" exact>
            <Explore />
            <Navbar />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/profile" exact>
            <Profile />
            <Navbar />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/post/:id" exact>
            <Post />
            <Navbar />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/user/:id" exact>
            <User />
            <Navbar />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/write" exact>
            <Write />
            <Navbar />
          </CustomRoute>
          <CustomRoute needsUser={true} path="/404" exact>
            <NotFound />
          </CustomRoute>
          <Route path="/">
            <RouterRedirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
