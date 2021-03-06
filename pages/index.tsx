import React from "react";
import About from "../components/About/About";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Clients from "../components/Clients/Clients";
import Galery from "../components/Galery/Galery";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import CustomHead from "../components/CustomHead";

import dynamic from "next/dynamic";

const MapsClientSide = dynamic(() => import("../components/Maps/Maps"), {
	ssr: false,
});

const IndexPage = () => {
	return (
		<CustomHead>
			<Nav />
			<Header />
			<About />
			<Services />
			<Clients />
			<Galery />
			<MapsClientSide />
			<Footer />
		</CustomHead>
	);
};

export default IndexPage;
