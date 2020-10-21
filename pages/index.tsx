import React from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Clients from "../components/Clients/Clients";
import Galery from "../components/Galery/Galery";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const IndexPage = () => {
	return (
		<>
			<Nav />
			<Header />
			<About />
			<Services />
			<Clients />
			<Galery />
			<Footer />
		</>
	);
};

export default IndexPage;
