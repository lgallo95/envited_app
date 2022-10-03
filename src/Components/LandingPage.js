import React from "react";
import { ReactComponent as Landing } from "../images/landing.svg";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Create from "./Create";

function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="ImgContainer">
        <Landing />
      </div>
      <div className="TextContainer">
        <h1>Imagine if Snapchat had events.</h1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <nav>
          <Link to="/create"> &#127881; Create my event </Link>
        </nav>
      </div>
    </div>
  );
}

export default LandingPage;

// {/* <div className="ImgContainer">
//   <Landing />
// </div>
// <div className="TextContainer">
//   <h1>Imagine if Snapchat had events.</h1>
//   <p>
//     Easily host and share events with your friends across any social
//     media.
//   </p>

// </div>
// <BrowserRouter>
// <Routes>
//   <Route path="/create" element = {Create}/>
// </Routes>
// </BrowserRouter> */}
