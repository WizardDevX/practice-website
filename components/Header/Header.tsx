import React from "react";
import {
	Slider,
	ImgBox,
	Background,
	HeaderBody,
	HeaderTitle,
	HeaderParagraph,
} from "./styles";

const Header = () => {
	const backgrounds = [
		{
			title: "The technology is here",
			img: "/img/bg1.jpg",
		},
		{
			title: "Train your mind",
			img: "/img/bg2.jpg",
		},
		{
			title: "The best software",
			img: "/img/bg3.jpg",
		},
	];

	return (
		<>
			<Slider id="header">
				{backgrounds.map((bg, idx) => {
					return (
						<ImgBox key={idx}>
							<Background src={bg.img} />
							<HeaderBody>
								<HeaderTitle>{bg.title}</HeaderTitle>
								<HeaderParagraph>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Voluptatum optio officiis
									at unde suscipit iste quibusdam odio
									explicabo modi dicta!
								</HeaderParagraph>
							</HeaderBody>
						</ImgBox>
					);
				})}
			</Slider>
		</>
	);
};

export default Header;
