import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { FacebookFilled, TwitterOutlined, PinterestOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const CustomNavbar = ()=>{
    const navigate = useNavigate();

    return (
        <Navbar fluid rounded >
            <Navbar.Brand to="https://flowbite-react.com">
                <img
                    src="https://static.vecteezy.com/system/resources/previews/008/623/899/non_2x/gym-logo-design-template-fitness-club-creative-symbols-vector.jpg"
                    loading="lazy"
                    className="h-12"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white" style={{ fontWeight: 'bold' }}>
                    GYM
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <div className="d-flex justify-content-center align-items-center">
                <Navbar.Collapse>
                    <Navbar.Link className="hover:underline me-4 md:me-6" style={{ color: '#9845AA', cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link className="hover:underline me-4 md:me-6" style={{ cursor: 'pointer' }} onClick={() => { navigate('/about') }}>
                        About Us
                    </Navbar.Link>
                    <Navbar.Link className="hover:underline me-4 md:me-6" style={{ cursor: 'pointer' }} onClick={() => { navigate('/offers') }}>
                        What we offer
                    </Navbar.Link>
                    <Navbar.Link className="hover:underline me-4 md:me-6" style={{ cursor: 'pointer' }} onClick={() => { navigate('/Personal-trainer') }}>
                        Personal trainer
                    </Navbar.Link>
                    <Navbar.Link className="hover:underline me-4 md:me-6" style={{ cursor: 'pointer' }} onClick={() => { navigate('/map') }}>
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
            <div style={{ display: "flex", gap: 30, fontSize: '18px' }}>
                <FacebookFilled style={{ color: '#4267B2' }} />
                <TwitterOutlined style={{ color: '#1DA1F2' }} />
                <PinterestOutlined style={{ color: '#E60023' }} />
            </div>
        </Navbar>
    );
};

export default CustomNavbar;
