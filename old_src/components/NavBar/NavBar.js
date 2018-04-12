import React from "react";
import { Link } from "react-router-dom";
import "/.Navbar.css";

const Navbar = () =>

<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
<div class="container">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">WORKBE.</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
Menu
        <i class="fa fa-bars"></i>
        </button>
<div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#signup">Sign Up</a>
        </li>
        <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#features">Features</a>
        </li>
        <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#login">Log in</a>
        </li>
        </ul>
    </div>
</div>
</nav>

export default NavBar;
