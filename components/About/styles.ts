import styled from "styled-components";

import { mediaQuery } from "../../utils/styled";

export const AboutLayout = styled.section`
	position: relative;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	min-height: 100vh;
`;

export const Content = styled.div`
	width: 50%;
	padding: 100px;
	background-color: ${({ theme }) => theme.colors.complement1};

	${mediaQuery("max", "991px")`
		width: 100%;
		text-align: center;
		padding: 10%;
	`}
`;

export const ImgBox = styled.div`
	width: 50%;
	padding: 100px;
	background-color: ${({ theme }) => theme.colors.secondary};

	${mediaQuery("max", "991px")`
		width: 100%;
		padding: 10%;
	`}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	max-height: 500px;
	object-fit: cover;
	border-radius: 10px;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.background};
	font-size: 2rem;
	margin-bottom: 1rem;
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.background};
	font-size: 1.3rem;
`;
