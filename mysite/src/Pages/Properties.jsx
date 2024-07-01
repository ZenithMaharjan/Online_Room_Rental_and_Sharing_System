import React from "react";
import { Link } from "react-router-dom";
import Propertylist from "../Component/PropertyList";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Properties() {
  const location = useLocation();
  const cat1 = location.pathname.split("/")[2];
  const [cat, setcat] = useState(cat1);
  const [filter, setfilter] = useState("");
  const [sort, setsort] = useState("newest");

  return (
    <div>
      <div
        className=" d-flex  justify-content-end"
        style={{
          backgroundColor: "#c5e0e5",
          height: "55px",
          alignItems: "center",
        }}
      >
        <Link to="/propertyform">
          {" "}
          <button type="button" className="btn btn-success me-3 ">
            {" "}
            Add {cat}
          </button>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <Propertylist cat={cat} filter={filter} sort={sort} />
        </div>
      </div>
    </div>
  );
}
