import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import ABout from "./Pages/About/ABout";
import Header from "./Pages/Home/Header/Header";
import Footer from "./Pages/Home/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Vlogs from "./Pages/Home/Vlogs/Vlogs";
import Products from "./Pages/Products/Products";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Reviews from "./Pages/Reviews/Reviews";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/vlogs" element={<Vlogs></Vlogs>}></Route>
        <Route path="/about" element={<ABout></ABout>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
