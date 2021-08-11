import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

// function App() {
//   return <Login/>;
// }
function App() {
  // const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {<Home />}
        </Route>
        <Route path="/login">
          {<Login />}
        </Route>
        <Route path="/register">
          {<Register />}
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
