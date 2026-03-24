import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";
import { AboutMe } from "./pages/about me/AboutMe";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe/>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
