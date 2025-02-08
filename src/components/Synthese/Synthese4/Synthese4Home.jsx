import React from "react";
import Template from "./Template";
import Dashboard from "./Template";
import store from "./store";
import { Provider } from "react-redux";
export default function Synthese4Home() {
  return (
 
    <Provider store={store}>
      <div>
        <Template></Template>
        {/* <Dashboard></Dashboard> */}
      </div>
    </Provider>
  );
}
