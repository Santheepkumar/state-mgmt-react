import { useState } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Profile />
      <Dashboard />
    </Provider>
  );
}

export default App;
