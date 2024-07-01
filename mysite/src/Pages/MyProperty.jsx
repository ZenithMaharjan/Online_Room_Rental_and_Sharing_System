import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { faBuildingCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyPropertylist from "../Component/MyPropertylist";

export default function Myproperty() {
  const id = useSelector((state) => state.user.currentUser)._id;

  const [properties, setproperties] = useState([]);

  useEffect(() => {
    const getProperty = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/properties?id=${id}`
        );
        setproperties(res.data);
        console.log(res.data);
      } catch (err) {
        console.log("error");
      }
    };
    getProperty();
  }, []);

  const styles = {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div>
      <section
        className="mt-4 justify-content"
        style={{ borderBottom: "15px solid aliceblue", color: "green" }}
      >
        <div className="row">
          <div
            className="  mb-3"
            style={{ marginLeft: "400px", width: "300px", fontSize: "40px" }}
          >
            My Properties
          </div>
          <div
            className="  mb-3"
            style={{ fontSize: "30px", width: "200px", marginLeft: "240px" }}
          >
            <Link to="/propertyform">
              {" "}
              <button type="button" className="btn btn-success me-3 ">
                {" "}
                Add Your Properties
              </button>
            </Link>
          </div>

          <div
            className="shadow  mb-3"
            style={{
              border: "solid #ccc",
              padding: "10px",
              borderRadius: "12px",
              width: "120px",
            }}
          >
            <FontAwesomeIcon
              icon={faBuildingCircleArrowRight}
              style={{ fontSize: "30px", color: "red" }}
            />
            <span style={{ marginLeft: "20px", fontSize: "30px" }}>
              {properties.length}
            </span>
            <br />
          </div>
        </div>
      </section>

      <section
        style={{
          borderBottom: "15px solid #ccc",
          borderTop: "15px solid aliceblue",
        }}
      ></section>
      <div className="container mt-5">
        <div className="row">
          <div style={styles}>
            {properties.map((item) => (
              <MyPropertylist item={item} user={id} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
