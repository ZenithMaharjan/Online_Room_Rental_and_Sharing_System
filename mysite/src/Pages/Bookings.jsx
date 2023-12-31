import React from "react";
import { Link } from "react-router-dom";
import picI from "/src/images/roomin.jpg";
import hostel2 from "/src/images/hostel2.jpg";
import man2 from "/src/images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Mywishlist1 from "../Mycomponent/Mywishlist";
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
    console.log(2);
    console.log(currentuser.currentbooking);
    const getproperty = async () => {
      currentuser.currentbooking.map(async (item) => {
        console.log(3);
        try {
          const res = await axios.get(
            "http://localhost:5000/api/properties/find/" + item
          );
          // setproperty(res.data)
          setproperty((old) => [...old, res.data]);
        } catch (err) {
          err;
        }
      });
    };
    getproperty();
  }, [currentuser]);

  console.log(property);
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
          {/* <div className=" col-lg-3 card mt-3 mb-3  bs" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={picI} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Flat for rent in Bhaktapur</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
          <li className="list-group-item">Price: 7000</li>
          <li className="list-group-item">Location: Bhaktapur</li>
          <li className="list-group-item"> Single</li>
        </div>
        <Link to="/viewproperty" className="btn btn-success  mb-1 ">View </Link>
      

      </div>
      <div className=" clg-lg-3 card mt-3 mb-3 shadow-lg" style={{width: '22rem',
    border:'3px solid #ccc ',
    padding:'1px ',
    borderRadius:'10px',
    margin:'auto'

    }}>
        <img src={hostel2} className="card-img-top" alt="..." style={{backgroundSize:'cover',height:'200px'}}/>
        
        <div className="card-body">
          <h4 className="card-title">Delhibazar Boys Hostel</h4>
          
          </div>
      
        <div className="list-group list-group-flush">
        <li className="list-group-item">Min-Price:10000</li>
          <li className="list-group-item">Max-Price:13000</li>
          <li className="list-group-item">Location:Delhibazar</li>
          
        </div>

         <Link  to="/viewhostel" className="btn btn-success  mb-1 ">View </Link> 
        
      </div> */}
          {/* </div>
      </div>
      <div className='container'>

      <span className='mt-3 mx-5' style={{fontSize:'30px',color:'green'}}> Roommate Post</span>
      <div className='row'>
      <div className='col-lg-6 mt-3'>
     <div className="card mb-3 bs" style={{maxWidth: '600px',height:"200px"}}>
        <div className="row g-0">
          <div className="col-md-4">
          <img src={man2} className="img-fluid rounded-start " alt="..." style={{height:'200px'}}/>

          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Roommate Required For Single Room  In Butwal </h5>
              <FontAwesomeIcon  icon={faMapMarkerAlt} /> <span style={{fontSize:'18px'}}>Milanchowk,Butwal-9</span> <br/>
              
              <FontAwesomeIcon icon={faRupeeSign} /><span style={{fontSize:'18px'}}>6000</span>
              <div style={{fontSize:'18px'}}> Looking For :Any (30-40 yrs)</div>
              <div style={{fontSize:'18px'}}> Type :Furnished  <Link to="/roommateview" className="btn btn-primary  " style={{marginLeft:"50px",width:'150px'}}>View</Link>
 </div>
            </div>
          </div>
        </div>
      </div>
        </div>  */}
        </div>
      </div>
    </div>
  );
}
