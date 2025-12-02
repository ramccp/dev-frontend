import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditProfile from "./components/EditProfile";
import Feed from "./components/Feed";
import { Routes, Route } from "react-router";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Login from "./components/Login";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./utils/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<h1>Hello</h1>} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
               <Route path="/feed" element={<Feed />} />
               <Route path="/edit" element={<EditProfile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
