import styled, { css } from "styled-components";
import { mediaQuery } from "../../utils/styled";

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.complement2};
	padding: 100px 10%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.background};
	font-size: 1.1rem;

	${mediaQuery("max", "824px")`
        margin-bottom: 3rem;
    `}
`;

export const List = styled.ul`
	list-style: none;
`;

export const Item = styled.li`
	font-size: 1.1rem;
	color: ${({ theme }) => theme.colors.background};
	margin-bottom: 1rem;

	&:last-child() {
		margin-bottom: 0;
	}

	${mediaQuery("max", "824px")`
        margin-bottom: 1rem;
    `}
`;

export const Social = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.background};
`;

export const link = css`
	text-align: center;
	text-decoration: none;
	cursor: pointer;
`;
