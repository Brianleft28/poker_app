import "./App.css";
import Header from "./component/layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./component/routes/Home";
import Game from "./component/routes/Game";
import Menu from "./component/routes/Menu";
import Profile from "./component/routes/Profile";

function App() {
  return (
    <>
      <Router>
        <main className="dark text-foreground bg-gradient-to-br from-foreground-100 to-background via-secondary-50 text-3xl min-h-screen flex justify-center items-center ">
          <div className="fixed top-0 left-0 w-full">
            <Header />
          </div>
          <div
            className="flex gap-1 flex-col justify-center items-center"
            style={{ height: "calc(100% - 50px)" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/game" element={<Game />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
