import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux";
import Body from "./Components/Body/Body";
import Login from "./Components/Auth/Login";
import Profile from "./Components/Profile/Profile";
import appStore from "./Utils/appStore";
import Feed from "./Components/Feed/Feed";
import Connections from "./Components/Connections/Connections";
import ConnectionRequest from "./Components/Connections/ConnectionRequest";
import Signup from "./Components/Auth/Signup";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
      {/* <NavBar /> */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/connections/request" element={<ConnectionRequest />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
