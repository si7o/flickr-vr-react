import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";
import Header from "components/header/Header";
import HomePage from "pages/home/HomePage";
import AboutPage from "pages/about/AboutPage";
import UserPage from "pages/user/UserPage";
import PhotoPage from "pages/user/photo/PhotoPage";

export const LINKS = {
  homepage: "/",
  userPage: "/photos/:pathAlias",
  photoPage: "/photos/:pathAlias/:photoId",
};

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Router basename={`/${process.env.BASEPATH}`}>
        <Header />
        <Switch>
          <Route exact path={LINKS.homepage} component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path={LINKS.photoPage} component={PhotoPage} />
          <Route exact path={LINKS.userPage} component={UserPage} />
        </Switch>
      </Router>
    </ReduxProvider>
  );
};

export default App;
