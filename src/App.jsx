import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Login from "./components/Login";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<h1>Hello</h1>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
