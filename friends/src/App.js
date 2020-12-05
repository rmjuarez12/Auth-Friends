// Import Modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Assets
import "./App.css";

// Import Components
import Header from "./components/Header";

// Import Routes
import Friends from "./routes/Friends";
import Homepage from "./routes/Homepage";
import Login from "./routes/Login";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //* Set whether user is logged in or not
  const userLoggedIn = (current) => {
    setIsLoggedIn(!current);
  };

  //* Check if we got a token
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Router>
      <div className='App'>
        <Header isLoggedIn={isLoggedIn} userLoggedIn={userLoggedIn} />

        <main>
          <Switch>
            <Route exact path='/' component={Homepage} />

            <Route path='/login'>
              <Login userLoggedIn={userLoggedIn} />
            </Route>

            <PrivateRoute path='/friends' component={Friends} />

            <PrivateRoute path='/add-friends' component={AddFriend} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
