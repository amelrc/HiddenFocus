import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

const Galleries = (props) => {
  let { path, url } = useRouteMatch();
  console.log(props);
  return (
    <>
      <div>Galleries</div>
      <div>
        <ul>
          <li>
            <NavLink to={`${url}/Canada`}>Canada</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/Cuba`}>Cuba</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/Angkor`}>Angkor</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/NYC`}>NYC</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${path}/:topicId`}>hello</Route>
        </Switch>
      </div>
    </>
  );
};

export default Galleries;
