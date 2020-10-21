import React from "react";
import { Container, Title, GaleryGrid, ImgBox, Img } from "./styles";

const Galery = () => {
	return (
		<Container id="galery">
			<Title>Galeria</Title>
			<GaleryGrid>
				{new Array(9).fill(1).map((_, idx) => {
					return (
						<ImgBox key={idx}>
							<Img src={`/img/img${(idx % 6) + 1}.jpg`} />
						</ImgBox>
					);
				})}
			</GaleryGrid>
		</Container>
	);
};

export default Galery;
