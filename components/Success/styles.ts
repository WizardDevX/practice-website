import styled from "styled-components";

export const Card = styled.div`
	position: absolute;
	left: 50%;
	top: 20%;
	width: 300px;
	padding: 20px;
	background-color: ${({ theme }) => theme.colors.secondary};
	transform: translateX(-50%);
`;
export const Message = styled.h2`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.complement2};
	text-align: center;
	margin-bottom: 0.5rem;
`;

export const Back = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.background};

	& > svg {
		font-size: 2rem;
		margin-right: 0.3rem;
	}
`;
