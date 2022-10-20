import { useState } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import { Provider } from "jotai";

function App() {
  return (
    <Provider>
      <Profile />
      <Dashboard />
    </Provider>
  );
}

export default App;
