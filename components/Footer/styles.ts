import styled, { css } from "styled-components";
import { mediaQuery } from "../../utils/styled";

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.colors.complement2};
	padding: 100px 10%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	${mediaQuery("max", "824px")`
        justify-content: center;
    `}
`;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.background};
	font-size: 1.3rem;

	${mediaQuery("max", "824px")`
        margin-bottom: 3rem;
    `}
`;

export const Social = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem;
	width: 300px;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.background};
`;

export const link = css`
	text-align: center;
	text-decoration: none;
	cursor: pointer;
`;
