import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	padding: 200px 10% 100px;
	background-color: ${({ theme }) => theme.colors.primary};
	text-align: center;
	margin-top: -200px;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.background};
	font-size: 2rem;
	margin-bottom: 1rem;
`;

export const TestimonialGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 4rem;
	margin-top: 5rem;
`;

export const Testimonial = styled.div`
	padding: 4rem 2rem;
	background-color: ${({ theme }) => theme.colors.background};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const TestimonialTitle = styled.h2`
	color: ${({ theme }) => theme.colors.complement1};
	font-size: 1.5rem;
	text-align: end;
`;

export const TestimonialText = styled.p`
	color: ${({ theme }) => theme.colors.complement2};
	font-size: 1rem;
	font-style: italic;
	letter-spacing: 0.1rem;
	margin-bottom: 2rem;
	text-align: left;
`;
