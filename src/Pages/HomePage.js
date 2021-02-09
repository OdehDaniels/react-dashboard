import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { Routes } from "../routes";

// pages
import Signin from "./frontend/Signin";
import Signup from "./frontend/Signup";
import ForgotPassword from "./frontend/ForgotPassword";
import ResetPassword from "./frontend/ResetPassword";
import Lock from "./frontend/Lock";
import NotFoundPage from "./frontend/NotFound";
import ServerError from "./frontend/ServerError";

const FrontEndRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => ( <> <Component {...props} /> </> ) } />
  );
};

// const RouteWithSidebar = ({ component: Component, ...rest }) => {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoaded(true), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const localStorageIsSettingsVisible = () => {
//     return localStorage.getItem('settingsVisible') === 'false' ? false : true
//   }

//   const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

//   const toggleSettings = () => {
//     setShowSettings(!showSettings);
//     localStorage.setItem('settingsVisible', !showSettings);
//   }

//   return (
//     <Route {...rest} render={props => (
//       <>
//         <Preloader show={loaded ? false : true} />
//         <Sidebar />

//         <main className="content">
//           <Navbar />
//           <Component {...props} />
//           <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
//         </main>
//       </>
//     )}
//     />
//   );
// };

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
    
    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
