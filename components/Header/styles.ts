import styled from "styled-components";

export const Slider = styled.header`
	position: relative;
	background-color: #000;
	min-height: 100vh;
`;

export const ImgBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	min-height: 100vh;
	width: 100%;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	padding: 10%;
	animation: slideshow 21s ease-in-out infinite;
	opacity: 0;

	@keyframes slideshow {
		0% {
			opacity: 1;
		}

		29% {
			opacity: 1;
		}

		33% {
			opacity: 0;
		}

		95% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	&:nth-of-type(1) {
		animation-delay: 0s;
	}

	&:nth-of-type(2) {
		animation-delay: 6.5s;
	}

	&:nth-of-type(3) {
		animation-delay: 13.5s;
	}
`;

export const Background = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0.6;
`;

export const HeaderBody = styled.section`
	position: relative;
	max-width: 700px;
	text-align: center;
`;

export const HeaderTitle = styled.h2`
	color: ${({ theme }) => theme.colors.secondary};
	font-size: clamp(2rem, 4vw, 6vw);
	margin-bottom: 1rem;
`;

export const HeaderParagraph = styled.p`
	color: ${({ theme }) => theme.colors.background};
	font-size: clamp(1rem, 1.5vw, 2vw);
	font-weight: 500;
	letter-spacing: 0.1rem;
`;
