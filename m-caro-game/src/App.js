import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import HomeContainer from './containers/Home.container.jsx';

function App() {
  return (
    <BrowserRouter>
      <switch>
          <Route exact path="/" component={HomeContainer}/>
      </switch>
    </BrowserRouter>
  );
}

export default App;
