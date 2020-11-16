import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Themes } from "./components/Themes";
import { Destinations } from "./components/Destinations";
import { Shows } from "./components/Shows";
import { WhatNow } from "./components/WhatNow";
import { Acknowledgements } from "./components/Acknowledgements";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/themes" component={Themes} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/shows" component={Shows} />
            <Route path="/what_now" component={WhatNow} />
            <Route path="/acknowledgements" component={Acknowledgements} />
          </Switch>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
