import * as React from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Postcreate from "./postcreate";
import Postlist from "./postlist";
import MenubarDemo from "./Menu";
import DialogDemo from "./radixForm";
import Form from "./form";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/radix" element={<DialogDemo />} />{" "}
          <Route path="/" element={<Postlist />} />{" "}
        </Routes>
        <MenubarDemo />
        <ul>
          <li>
            <Link to="/"> home </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/radix"> form </Link>{" "}
          </li>{" "}
          <li> </li>{" "}
        </ul>{" "}
        {/* <Postcreate />  */}{" "}
        {/* <Form />

      <DialogDemo /> */}{" "}
      </div>{" "}
    </div>
  );
}

export default App;
