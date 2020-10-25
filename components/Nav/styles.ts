import styled from "styled-components";
import { mediaQuery } from "../../utils/styled";

export const Navbar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	padding: 2rem 10%;
	background-color: transparent;
	justify-content: space-between;
	align-items: center;
	z-index: 3;
	transition: 0.5s;
	width: 100%;
	color: ${({ theme }) => theme.colors.background};

	&.scrolled {
		color: ${({ theme }) => theme.colors.complement2};
		background-color: ${({ theme }) => theme.colors.background};
		padding: 1.5rem 10%;
		box-shadow: 0 0 20px ${({ theme }) => theme.colors.complement1};
	}
`;

export const Logo = styled.a`
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.background};

	${Navbar}.scrolled & {
		color: ${({ theme }) => theme.colors.complement2};
	}
`;

export const Menu = styled.ul<{ open: boolean }>`
	position: relative;
	display: flex;

	@media screen and (max-width: 860px) {
		position: fixed;
		display: block;
		top: 97px;
		left: 0;
		padding 100px 10%;
		text-align: center;
		width: 100%;
		height: 100vh;
		background-color: ${({ theme }) => theme.colors.background};
		transition: .5s;
		z-index: 3;
		border-top: 1px solid ${({ theme }) => theme.colors.complement2};
		color: ${({ theme }) => theme.colors.complement2};
		transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};

	}`;

export const Item = styled.li`
	position: relative;
	list-style: none;
`;
export const LinkUrl = styled.a`
	position: relative;
	text-decoration: none;
	display: inline-block;
	margin: 0 15px;
	cursor: pointer;

	${mediaQuery("max", "860px")`
		font-size: 2rem;
		margin: 10px;
	`}
`;

export const Button = styled.div`
	display: none;

	${mediaQuery("max", "860px")`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	cursor: pointer;
	transition: 0.5s;
	`}
`;

export const Lines = styled.div<{ open: boolean }>`
	width: 30px;
	height: 6px;
	background-color: ${props =>
		props.open
			? "background-color: transparent"
			: props.theme.colors.background};
	border-radius: 5px;
	transition: 0.5s;
	transform: ${props => (props.open ? "translateX(-50px)" : "")};

	${Navbar}.scrolled & {
		background-color: ${props =>
			props.open
				? "background-color: transparent"
				: props.theme.colors.complement2};
	} 
	
	
	${Navbar}.scrolled &::before, ${Navbar}.scrolled &::after {
		background-color: ${props => props.theme.colors.complement2};
	}

	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 30px;
		height: 6px;
		background-color: ${props => props.theme.colors.background};
		border-radius: 5px;
		transition: 0.5s;
	}

	&::before {
		transform: ${props =>
			props.open
				? "rotate(45deg) translate(35px, -35px)"
				: "translateY(-10px)"};
	}

	&::after {
		transform: ${props =>
			props.open
				? "rotate(-45deg) translate(35px, 35px)"
				: "translateY(10px)"};
	}
`;
