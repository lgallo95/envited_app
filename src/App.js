import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Create from "./Components/Create";
import Event from "./Components/Event"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route index element={<LandingPage />} />
      <Route path="create" element={<Create />} />
      <Route path="event" element={<Event />} />
      </Routes>

      </BrowserRouter>
      </div>
  );
}

export default App;

// <div className="App">
//   <div className="ImageBox">
//     <Landing />
//   </div>

//   <div className="TextBox">
//     <h1>Imagine if Snapchat had events.</h1>
//     <p>
//       Easily host and share events with your friends across any social
//       media.
//     </p>
//     <nav>
//       <Link to="/create"> &#127881; Create my event</Link>
//     </nav>
//   </div>
//   <Routes>
//     <Route path="/create">
//       <Create />
//     </Route>
//   </Routes>
// </div>
