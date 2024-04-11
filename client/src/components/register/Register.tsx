import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        weight: weight,
        height: height,
        imageUrl: image,
      };
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        body
      );
      console.log(response.data);
      setError("");
      navigate("/login");
    } catch (err:any) {
      setError(err.response.data.error);
      console.log(err.response.data.error);
    }
  };



  return (
    <div>
      <div className="form doctor-form" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", marginLeft:'340px',backgroundColor:'white'}}>
        <form onSubmit={handleSubmit}>
          <h2 style={{ color: "#007E85", marginBottom:'20px',marginLeft:'120px',marginTop:'33px'}}> Sign Up</h2>
          <div>
            <div className="doctor-image">
              <img
                src="https://th.bing.com/th/id/OIP.czYUxy7G0x5DDRsqs9xq0QHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Doctor"
                style={{marginBottom:'20px' , borderRadius:'20%',marginLeft:'50px',marginTop:'20px',background:'transparent'}}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
             
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
