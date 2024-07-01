import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Mywishlist1 from "../Mycomponent/Mywishlist";
import axios from "axios";

export default function Mywishlist() {
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
      currentuser.wishlist.map(async (item) => {
        const res = await axios.get(
          "http://localhost:5000/api/properties/find/" + item
        );
        setproperty((old) => [...old, res.data]);
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
      <section
        className="mt-4"
        style={{ borderBottom: "15px solid aliceblue", color: "green" }}
      >
        <div className="row" style={{ display: "flex" }}>
          <div
            className="  mb-3"
            style={{
              display: "flex",
              marginLeft: "500px",
              width: "300px",
              fontSize: "40px",
            }}
          >
            My Wishlist
          </div>
          <div
            className="shadow  mb-3"
            style={{
              border: "solid #ccc",
              padding: "10px",
              borderRadius: "12px",
              width: "150px",
              marginLeft: "400px",
            }}
          >
            <FontAwesomeIcon
              icon={faHeartCircleCheck}
              style={{ fontSize: "30px", color: "red" }}
            />
            <span style={{ marginLeft: "22px", fontSize: "30px" }}>
              {property.length}
            </span>
            <br />
          </div>
        </div>
      </section>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div style={styles}>
            {property.map((item) => (
              <Mywishlist1 item={item} userid={user} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
