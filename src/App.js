// react router
import { Route, Switch } from "react-router-dom"
// Components
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/about" >
          <AboutUs/>
        </Route>
        <Route path="/gallery" >
          <Gallery/>
        </Route>
        <Route path="/destination">
          <Destination/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
