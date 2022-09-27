
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink,Routes, Route,Navigate} from 'react-router-dom';
import Home from "./components/Home/Home"
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import AboutUs from "./components/AboutUs/Aboutus";
import { RiHome3Fill } from "react-icons/ri";
import { HiExternalLink } from "react-icons/hi";
import { BiUserPlus } from "react-icons/bi";
import {useSelector} from "react-redux";
import Userprofile from './components/UserProfile/UserProfile';
import Products from "./components/Products/Product";
import Cart from "./components/Cart/Cart";


function App() {
  let {isSuccess} = useSelector(state=>state.userLogin)


  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand"
            href="#">
            Navbar
          </a>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {isSuccess === true ? (
                 <li className="nav-item">
                 <NavLink className="nav-link" to="/aboutus">
                   <BiUserPlus />
                   Logout
                 </NavLink>
               </li>

              ): (

                //react-fragment

                <>

              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <RiHome3Fill />
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  <BiUserPlus />
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signin">
                  <HiExternalLink />
                  Signin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  <BiUserPlus />
                  AboutUs
                </NavLink>
              </li>
              </>
              )}
            </ul>
         </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/userprofile" element={<Userprofile />} >
        
        {/*Children of iserprofile*/}
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="" element={<Navigate to="products" />} />
      </Route>
      </Routes>

    </div>
  );
}

export default App;
