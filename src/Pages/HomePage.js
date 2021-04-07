import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Signin from "./usr/Signin";
import Signup from "./usr/Signup";
import Index from "./usr/Index";
import Profile from "./usr/Profile";
import Wallet from "./Wallet";
import Transactions from "./Transactions";
import Orders from "./order/Orders";
import CreateOrder from "./order/CreateOrder";
import Settings from "./Settings";
import ForgotPassword from "./usr/ForgotPassword";
import ResetPassword from "./usr/ResetPassword";
import Lock from "./usr/Lock";
import NotFoundPage from "./usr/NotFound";
import ServerError from "./usr/ServerError";
// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FrontEndRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => ( <> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  
  // const localStorageIsSettingsVisible = () => {
  //   return localStorage.getItem('settingsVisible') === 'false' ? false : true
  // }

  // const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  // const toggleSettings = () => {
  //   setShowSettings(!showSettings);
  //   localStorage.setItem('settingsVisible', !showSettings);
  // }

  return (
    <Route {...rest} render={props => (
      <>
        <Sidebar />

        <main className="content">
          <Navbar />
          <Component {...props} />
          <Footer />
        </main>
      </>
    )}
    />
  );
};

export default () => (
  <Switch>
    <FrontEndRoute exact path={Routes.Signin.path} component={Signin} />
    <FrontEndRoute exact path={Routes.Signup.path} component={Signup} />
    <FrontEndRoute exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <FrontEndRoute exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <FrontEndRoute exact path={Routes.Lock.path} component={Lock} />
    <FrontEndRoute exact path={Routes.NotFound.path} component={NotFoundPage} />
    <FrontEndRoute exact path={Routes.ServerError.path} component={ServerError} />

    {/* pages */}
    <RouteWithSidebar exact path={Routes.Index.path} component={Index} />
    <RouteWithSidebar exact path={Routes.Profile.path} component={Profile} />
    <RouteWithSidebar exact path={Routes.Wallet.path} component={Wallet} />
    <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Orders.path} component={Orders} />
    <RouteWithSidebar exact path={Routes.CreateOrder.path} component={CreateOrder} />
    <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />
    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
