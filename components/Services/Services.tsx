import React from "react";
import {
	Container,
	Title,
	Text,
	ServicesGrid,
	Card,
	CardTitle,
} from "./styles";
import { FaSearch, FaCode, FaLaptopCode } from "react-icons/fa";

const Services = () => {
	return (
		<Container id="services">
			<Title>Nuestros Servicios</Title>
			<Text>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Adipisci, officiis. Dolorum est eum doloremque neque voluptas
				vero nam. Saepe modi at distinctio reprehenderit optio nobis
				praesentium animi itaque cum labore quidem alias quaerat
				asperiores dolorem aliquam, sapiente iste id? Facere nemo
				excepturi vitae doloremque saepe doloribus dolorem consequatur,
				consequuntur quos.
			</Text>
			<ServicesGrid>
				<Card>
					<FaLaptopCode />
					<CardTitle>Software</CardTitle>
				</Card>
				<Card>
					<FaSearch />
					<CardTitle>Herramientas</CardTitle>
				</Card>
				<Card>
					<FaCode />
					<CardTitle>Código</CardTitle>
				</Card>
			</ServicesGrid>
		</Container>
	);
};

export default Services;
