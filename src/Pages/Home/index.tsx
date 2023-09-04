import React from "react";
import { Link } from "react-router-dom";
import { Users } from "../../Components/Users"
import "./home.css"

export const HomePage = () => {
    return (
        <div className="home-page-container">        
            <h1>Home Page</h1>
            <Users />
        </div>
    )
}
