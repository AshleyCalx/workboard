import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import SignUp from "../../components/SignUp";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

class Home extends Component {
	render() {
		return (
			<div class="container">
				<NavBar />
				<SignUp />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default Home;



