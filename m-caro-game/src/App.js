import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer"

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={HomeContainer}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
