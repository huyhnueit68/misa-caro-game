import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer"
import Auth0ProviderWithHistory from "./components/auth/auth0-provider-with-history";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/loading";

function App() {

  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <BrowserRouter>
      <Switch>
        <Auth0ProviderWithHistory>
          <Route exact path="/" component={HomeContainer}/>
        </Auth0ProviderWithHistory>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
