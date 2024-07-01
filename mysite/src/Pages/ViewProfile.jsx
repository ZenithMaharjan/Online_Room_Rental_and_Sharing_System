import React from "react";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";

export default function viewProfile() {
  const [user, setuser] = useState();
  const id = location.pathname.split("/")[2];
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const getuser = async () => {
      try {
        const res = (
          await axios.get("http://localhost:5000/api/users/find/" + id)
        ).data;
        setuser(res);
        setCheck(true);
      } catch (err) {
        ("error");
      }
    };
    getuser();
  }, []);
  let ebno;
  user?.ebno === "yes" ? (ebno = "Early Bird") : (ebno = "Nightowl");

  return (
    <div>
      <nav className="navbar bg-body-tertiary fixed">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {" "}
            My Profile
          </a>

          {check && user.firstname == undefined && (
            <Navigate to="/profilereg" />
          )}
        </div>
      </nav>

      <section
        style={{
          borderBottom: "25px solid aliceblue",
          borderTop: "25px solid aliceblue",
          backgroundColor: "",
        }}
      >
        <div className="container pt-4">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "250px",
            }}
          >
            <h1 className="text-center" style={{ flex: "1" }}>
              About Me
            </h1>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4">
              <div className="col-md-7 mt-1 mx-3">
                <img
                  src={`/uploads/${user?.photo}`}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row mt-3" style={{ lineHeight: "50px" }}>
                <div className="col-md-6">
                  <FontAwesomeIcon
                    style={{ marginLeft: "3em" }}
                    icon={faUser}
                  />
                  <span style={{ fontSize: "18px", marginLeft: "10px" }}>
                    {user?.firstname} {user?.lastname}
                  </span>
                  <br />
                  <FontAwesomeIcon
                    style={{ marginLeft: "3em" }}
                    icon={faEnvelope}
                  />
                  <span style={{ fontSize: "18px", marginLeft: "10px" }}>
                    {user?.email}
                  </span>
                  <br />
                  <FontAwesomeIcon
                    style={{ marginLeft: "3em" }}
                    icon={faMapMarkerAlt}
                  />{" "}
                  <span style={{ fontSize: "20px", marginLeft: "10px" }}>
                    {" "}
                    {user?.district}
                  </span>{" "}
                  <br />
                  <FontAwesomeIcon
                    className="mb-2"
                    style={{ marginLeft: "3em" }}
                    icon={faPhone}
                  />
                  <span style={{ fontSize: "20px", marginLeft: "10px" }}>
                    {user?.phoneno}{" "}
                  </span>{" "}
                  <br />
                </div>
                <div className="col-md-6">
                  <ul style={{ fontSize: "18px" }}>
                    <li>
                      {" "}
                      Gender:{" "}
                      {user?.gender.slice(0, 1).toUpperCase() +
                        user?.gender.slice(1, user?.gender.length)}
                    </li>
                    <li>Age: {user?.age}</li>
                    <li>
                      Occupation:{" "}
                      {user?.occupation.slice(0, 1).toUpperCase() +
                        user?.occupation.slice(1, user?.occupation.length)}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <table
        className=" mt-2 mx-5 me-3 mb-2"
        style={{
          fontFamily: "sans-serif",
          borderCollapse: "collapse",
          fontSize: "40",
          width: "90%",
        }}
      >
        <tr>
          <td style={{ fontSize: "20px" }}>Name</td>
          <td style={{ fontSize: "20px" }}>
            {user?.firstname.slice(0, 1).toUpperCase() +
              user?.firstname.slice(1, user?.firstname.length)}{" "}
            {user?.lastname}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Gender</td>
          <td style={{ fontSize: "20px" }}>
            {user?.gender.slice(0, 1).toUpperCase() +
              user?.gender.slice(1, user?.gender.length)}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Age</td>
          <td style={{ fontSize: "20px" }}>{user?.age}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Occupation</td>
          <td style={{ fontSize: "20px" }}>
            {user?.occupation.slice(0, 1).toUpperCase() +
              user?.occupation.slice(1, user?.occupation.length)}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Smoker?</td>
          <td style={{ fontSize: "20px" }}>
            {user?.smoker.slice(0, 1).toUpperCase() +
              user?.smoker.slice(1, user?.smoker.length)}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Any pets?</td>
          <td style={{ fontSize: "20px" }}>
            {user?.pets.slice(0, 1).toUpperCase() +
              user?.pets.slice(1, user?.pets.length)}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}> Early bird/Night Owl?</td>
          <td style={{ fontSize: "20px" }}>{ebno}</td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Partying</td>
          <td style={{ fontSize: "20px" }}>
            {user?.partying.slice(0, 1).toUpperCase() +
              user?.partying.slice(1, user?.partying.length)}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Alcoholic</td>
          <td style={{ fontSize: "20px" }}>
            {user?.alcoholic.slice(0, 1).toUpperCase() +
              user?.alcoholic.slice(1, user?.alcoholic.length)}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Married</td>
          <td style={{ fontSize: "20px" }}>
            {user?.married.slice(0, 1).toUpperCase() +
              user?.married.slice(1, user?.married.length)}
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: "20px" }}>Veg</td>
          <td style={{ fontSize: "20px" }}>
            {user?.veg.slice(0, 1).toUpperCase() +
              user?.veg.slice(1, user?.veg.length)}{" "}
          </td>
        </tr>
      </table>
    </div>
  );
}
