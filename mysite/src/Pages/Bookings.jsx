import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import MyBookings from "../Mycomponent/MyBookings";

export default function Bookings() {
  const user = useSelector((state) => state.user.currentUser)._id;

  const [currentuser, setCurrentuser] = useState("");
  const [property, setproperty] = useState([]);

  useEffect(() => {
    const getwishlist = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users/find/" + user
        );
        setCurrentuser(res.data);
      } catch (err) {
        ("err");
      }
    };
    getwishlist();
  }, []);

  useEffect(() => {
    const getproperty = async () => {
      currentuser.currentbooking.map(async (item) => {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/properties/find/" + item
          );
          setproperty((old) => [...old, res.data]);
        } catch (err) {
          err;
        }
      });
    };
    getproperty();
  }, [currentuser]);

  const styles = {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div>
      <div className="container mt-5 mb-5">
        <span
          className="mt-3 mx-5"
          style={{ color: "green", fontSize: "30px" }}
        >
          {" "}
          MY BOOKINGS
        </span>
        <div className="row">
          <span className="mt-4 mx-5" style={{ fontSize: "25px" }}>
            {" "}
            Properties
          </span>
          <div style={styles}>
            {property.map((item) => (
              <MyBookings item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
