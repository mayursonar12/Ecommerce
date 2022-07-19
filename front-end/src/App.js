import logo from "./logo.svg";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignupPage from "./components/SignupPage";
import PrivateComponent from "./components/PrivateComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Homepage</h1>}></Route>
            <Route path="/products" element={<h1>Products page</h1>}></Route>
            <Route
              path="/updateProducts"
              element={<h1>Update Products page</h1>}
            ></Route>
          </Route>
          <Route path="/sign-up" element={<SignupPage />}></Route>
          <Route path="/logout" element={<h1>Logout</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
