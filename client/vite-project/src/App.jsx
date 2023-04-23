import * as React from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Postcreate from "./postcreate";
import Postlist from "./card";
import MenubarDemo from "./Menu";
import DialogDemo from "./radixForm";
import Form from "./form";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Example from "./blog";
import Navbar from "./nav";
import Hero from "./hero";
import Tailform from "./tailform";

function App() {
  return (
    <div className="App">
      <div>
       <Hero />
        <br />
        <br />
        
        <Routes>
          <Route path="" element={<Postlist />} />
        </Routes>
       
        <Tailform />
        <ul>
          <li>
            <Link to="/"> home </Link>
          </li>
          <li>
            <Link to="/radix"> form </Link>
          </li>
          <li> </li>
        </ul>
        {/* <Postcreate />  */}
        {/* <Form />

      <DialogDemo /> */}
      </div>
    </div>
  );
}

export default App;
