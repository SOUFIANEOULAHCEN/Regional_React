import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Template from "./Template";

export default function SyntheseHome() {
  return (
    <>
    <Provider store={store}>
        <Template></Template>
    </Provider>
    </>
  );
}
