import React from "react";
import { useSelector } from "react-redux";

const MyBookings = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser).wishlist;
  console.log(user);

  return (
    <div>
      <div
        className=" col-lg-3 card mt-3 mb-3  bs"
        style={{
          width: "22rem",
          border: "3px solid #ccc ",
          padding: "1px ",
          borderRadius: "10px",
          margin: "auto",
        }}
      >
        <img
          src={`/uploads/${item.img[0]}`}
          className="card-img-top"
          alt="..."
          style={{ backgroundSize: "cover", height: "200px" }}
        />

        <div className="card-body">
          <h4 className="card-title">
            {item?.category} for rent in {item?.province}
          </h4>
        </div>

        <div className="list-group list-group-flush">
          <li className="list-group-item">Type: {item?.category}</li>
          <li className="list-group-item">Location: {item?.district}</li>
          <li className="list-group-item">Price: {item?.price}</li>
        </div>
        <a href={`/property/${item._id}`} className="btn btn-success  mb-1 ">
          View{" "}
        </a>
      </div>
    </div>
  );
};

export default MyBookings;
