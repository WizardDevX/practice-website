import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	padding: 100px 10%;
	background-color: ${({ theme }) => theme.colors.background};
	text-align: center;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.complement2};
	font-size: 2rem;
`;

export const GaleryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	margin-top: 4rem;
`;

export const ImgBox = styled.figure`
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	max-height: 300px;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
