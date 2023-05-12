import * as React from "react";

import "./App.css";
import axios from "axios";
//import Postcreate from "./postcreate";
import Postlist from "./card";
// import MenubarDemo from "./Menu";
//import Form from "./form";
import { Routes, Route, Outlet, Link } from "react-router-dom";
//import Example from "./blog";
//import Navbar from "./nav";
//import Hero from "./hero";
import Tailform from "./tailform";
import Comment from "./comment";
import Header from "./header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        {/* <Hero /> */}
        <br />
        <br />
        <input type="text" name="test" value="test" />
        <Routes>
          <Route path="/form" element={<Tailform />} />
          <Route path="" element={<Postlist />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
        <ul>
          <li>
            <Link to="/"> home </Link>
          </li>
       
          <li> </li>
        </ul>

      </div>
    </div>
  );
}

export default App;
