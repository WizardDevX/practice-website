import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	padding: 100px 10%;
	background-color: ${({ theme }) => theme.colors.complement2};
	text-align: center;
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

export const ServicesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	margin-top: 4rem;
`;

export const Card = styled.div`
	padding: 4rem 1rem;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	font-size: 5rem;
	z-index: 1;
`;

export const CardTitle = styled.h2`
	color: ${({ theme }) => theme.colors.complement2};
	font-size: 1.5rem;
`;
