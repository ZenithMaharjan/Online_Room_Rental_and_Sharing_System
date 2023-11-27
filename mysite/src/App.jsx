import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Mycomponent/Header";
import Subhead from "./Mycomponent/Subhead";
import Footer from "./Mycomponent/Footer";
import Login from "./Mycomponent/Login";
import Register from "./Mycomponent/Register";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Properties from "./Pages/Properties";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Room from "./Pages/Rooms/Room";
import AddRoom from "./Pages/Rooms/AddRoom";
import Flat from "./Pages/Flats/Flat";
import Hostel from "./Pages/Hostels/Hostel";
import Addpost from "./Mycomponent/Addpost";
import Listform from "./Mycomponent/Listform";
import RoomFolder from "./Pages/Rooms/RoomFolder";
import Viewproperty from "./Mycomponent/Viewproperty";
import DemoViewproperty from "./Mycomponent/DemoViewProperty";
import Profilereg from "./Pages/Profilereg";
import VerificationPage from "./Pages/VerificationPage";
import MyProperty from "./Pages/MyProperty";
import Profile from "./Pages/Profile";
import ViewProfile from "./Pages/ViewProfile";
import BookingDetails from "./Pages/BookingDetails";
import Postroommate from "./Pages/PostRoommateForm/Postroommate";
import Propertyadd from "./PropertyForm/Propertyadd";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import axios from "axios";
import VerifyLogin from "./Mycomponent/VerifyLogin";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  const [userProfile, setuserProfile] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users/find/" + user._id
        );
        setuserProfile(res.data);
        console.log(res.data);
      } catch (err) {
        err;
      }
    };
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Header></Header>
      <div style={{ margin: "55px 80px" }}></div>
      <Subhead> </Subhead>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/Verify/Login"
          element={user ? <Navigate to="/" /> : <VerifyLogin />}
        />
        <Route
          path="Register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/AboutUs" element={<About></About>}></Route>
        <Route path="/Room" element={<Room></Room>}></Route>
        <Route path="/AddRoom" element={<AddRoom></AddRoom>}></Route>
        <Route path="/Flat" element={<Flat></Flat>}></Route>
        <Route path="/Hostel" element={<Hostel></Hostel>}></Route>
        <Route path="/Addpost" element={<Addpost></Addpost>}></Route>
        <Route
          path="/listform"
          element={user ? <Listform /> : <Navigate to="/Login" />}
        />
        <Route path="/roomfolder" element={<RoomFolder></RoomFolder>}></Route>
        <Route
          path="/viewproperty"
          element={<Viewproperty></Viewproperty>}
        ></Route>
        <Route path="/hostelform" element={<Hostelform></Hostelform>}></Route>
        <Route
          path="/propertyform"
          element={user ? <Propertyadd /> : <Navigate to="/Login" />}
        ></Route>

        <Route
          path="/Properties/:category"
          element={<Properties></Properties>}
        ></Route>
        <Route
          path="/Property/:id"
          element={<DemoViewproperty></DemoViewproperty>}
        ></Route>
        <Route path="/Hostelform" element={<Hostelform></Hostelform>}></Route>
        <Route
          path="/BookingDetails/:id"
          element={<BookingDetails></BookingDetails>}
        ></Route>
        <Route path="/MyProperty" element={<MyProperty></MyProperty>}></Route>
        <Route path="/Profilereg" element={<Profilereg></Profilereg>}></Route>
        <Route path="/Roommate" element={<Roommate></Roommate>}></Route>
        <Route
          path="/Profile"
          element={
            userProfile?.firstname ? <Profile></Profile> : <Profilereg />
          }
        ></Route>
        <Route
          path="/userProfile/:id"
          element={<ViewProfile></ViewProfile>}
        ></Route>
        <Route path="/Wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="/Bookings" element={<Bookings></Bookings>}></Route>
        <Route
          path="/users/:id/verify/:token"
          element={<VerificationPage></VerificationPage>}
        ></Route>
        <Route path="/viewmate/:id" element={<Viewmate></Viewmate>}></Route>
        <Route
          path="/postforroommate"
          element={<Postroommate></Postroommate>}
        ></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
