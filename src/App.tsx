import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { AboutMe } from "./pages/about me/AboutMe";
import { Projects } from "./pages/projects/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutMe />
              <Projects />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
