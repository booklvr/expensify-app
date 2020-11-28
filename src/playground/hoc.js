// higher order component (HOC) - A component that renders a another component
// reuse code
// render hijacking
// prop manipulation
// abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Must be logged in to view details</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo info="This is the details" isAuthenticated={false} />,
  document.getElementById("app")
);
