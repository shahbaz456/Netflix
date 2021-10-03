import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mainpage from "./Components/Mainpage/Mainpage";
import Mainprofile from "./Components/Mainprofile/Mainprofile";
import Browserpage from "./Components/BrowserPage/Browserpage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <PrivateRoute exact path="/Profile" component={Mainprofile} />
          <PrivateRoute exact path="/browse" component={Browserpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
