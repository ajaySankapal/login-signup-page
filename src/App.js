import { Typography } from "@material-ui/core";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

function App() {
  return (
    <div className="App">
      <div className="wrapper-c">
        <Router>
          <div className="navigation">
            <nav>
              <ul className="nav-links">
                <li>
                  <Link to="/">SignUp</Link>
                </li>
                <li>
                  <Link to="/login">LogIn </Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
