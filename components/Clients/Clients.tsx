import React from "react";
import {
	Container,
	Title,
	TestimonialGrid,
	Testimonial,
	TestimonialTitle,
	TestimonialText,
} from "./styles";

const Clients = () => {
	return (
		<Container id="testimonials">
			<Title>Testimonios de Clientes</Title>
			<TestimonialGrid>
				<Testimonial>
					<TestimonialText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Repellat, id saepe officiis culpa cumque qui voluptates
						atque, quo impedit necessitatibus voluptas ipsam debitis
						adipisci ex ducimus blanditiis earum, rerum nesciunt.
						Tempore corrupti corporis dolorum veritatis!
					</TestimonialText>
					<TestimonialTitle>John Doe</TestimonialTitle>
				</Testimonial>

				<Testimonial>
					<TestimonialText>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Eaque enim obcaecati, laudantium necessitatibus
						nostrum ipsa quibusdam neque iusto velit impedit
						pariatur culpa quaerat dolorem odit! Vel, assumenda!
						Quam libero dolore quidem totam ad! Doloribus, aliquid.
					</TestimonialText>
					<TestimonialTitle>Jane Doe</TestimonialTitle>
				</Testimonial>
			</TestimonialGrid>
		</Container>
	);
};

export default Clients;
