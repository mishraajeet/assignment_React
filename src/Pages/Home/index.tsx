import React from "react";
import { Link } from "react-router-dom";
import { Users } from "../../Components/Users";
import { Counter } from "../../Components/Counter"
import "./home.css"

export const HomePage = () => {
    return (
        <div className="home-page-container">        
            <h1>Home Page</h1>
            <Users />
            <Counter/>
        </div>
    )
}
