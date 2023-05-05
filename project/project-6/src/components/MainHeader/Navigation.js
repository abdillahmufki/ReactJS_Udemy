import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../store/auth-context";

const Navigation = () => {
  const ctxData = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctxData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxData.isLoggedIn && (
          <li>
            <button onClick={ctxData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
