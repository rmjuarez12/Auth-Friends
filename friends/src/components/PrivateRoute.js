// Import Modules
import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...props }) {
  return (
    <Route
      {...props}
      render={() => {
        // Logic for checking if have an auth token
        if (localStorage.getItem("token")) {
          return <Component />;
        }

        return <Redirect to='/login' />;
      }}
    />
  );
}
