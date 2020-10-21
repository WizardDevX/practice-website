import React from "react";
import { AboutLayout, Content, Img, ImgBox, Text, Title } from "./styles";

const About = () => {
	return (
		<AboutLayout id="about">
			<Content>
				<Title>¿Quienes Somos?</Title>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorem, aut ullam, harum, blanditiis sed ea maiores optio
					ipsum corporis obcaecati illum quas aperiam dolores.
					<br />
					<br />
					Atque iure ducimus saepe omnis ea natus consequuntur
					asperiores sint quis temporibus excepturi rerum voluptas sed
					dolore accusamus, earum, alias cupiditate rem possimus totam
					itaque commodi repudiandae corrupti quos! Ducimus quidem,
					esse enim temporibus nisi illum qui eaque sunt ullam quo
					magnam corrupti.
					<br />
					<br />
					Sapiente distinctio officia nisi iusto atque autem eveniet
					eius cupiditate vero earum voluptatem, amet magni odit ut?
					Ad, laboriosam dolores. Incidunt libero, magnam cum
					voluptatem mollitia rerum unde veritatis veniam iure iste
					molestiae!
				</Text>
			</Content>
			<ImgBox>
				<Img src="/img/img2.jpg" />
			</ImgBox>
		</AboutLayout>
	);
};

export default About;
