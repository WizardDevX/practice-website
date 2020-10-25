import styled from "styled-components";
import { mediaQuery } from "../../utils/styled";

export const Container = styled.section`
	position: relative;
	width: 80%;
	margin: 4rem auto 0 auto;
	padding: 50px;
	overflow: hidden;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.background};
	letter-spacing: 0.1rem;
	font-size: 500;
	text-transform: uppercase;
	margin-bottom: 40px;
`;

export const Form = styled.form`
	width: 50%;

	${mediaQuery("max", "768px")`
		width: 100%;
	`}
`;

export const InputBox = styled.div`
	position: relative;
	margin-bottom: 40px;

	&:last-child() {
		margin-bottom: 0;
	}
`;

export const Input = styled.input`
	position: relative;
	background: transparent;
	outline: none;
	border: none;
	width: 100%;
	color: ${({ theme }) => theme.colors.background};
	padding-bottom: 10px;
	font-size: 1rem;
	letter-spacing: 1px;
	font-weight: 300;
	border-bottom: 2px solid ${({ theme }) => theme.colors.background};
`;

export const TextArea = styled.textarea`
	position: relative;
	background: transparent;
	outline: none;
	border: none;
	width: 100%;
	color: ${({ theme }) => theme.colors.background};
	padding-bottom: 10px;
	font-size: 1rem;
	letter-spacing: 1px;
	font-weight: 300;
	border-bottom: 2px solid ${({ theme }) => theme.colors.background};
	resize: none;
`;

export const PlaceHolder = styled.span<{ hasContent?: boolean }>`
	position: absolute;
	left: 0;
	font-size: 1rem;
	font-weight: 300;
	display: inline-block;
	pointer-events: none;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.colors.background};
	transition: all 0.2s;

	${Input}:focus ~ &,
	${TextArea}:focus ~ & {
		transform: translateY(-24px);
		color: ${({ theme }) => theme.colors.primary};
		font-size: 0.9rem;
	}

	${props =>
		props.hasContent
			? `transform: translateY(-24px);
	color: ${props.theme.colors.primary};
	font-size: 0.9rem;	`
			: ""}
`;

export const Submit = styled.button`
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 10px 20px;
	margin-top: -10px;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.background};
	font-size: 1.1rem;
	font-weight: 400;
	border: none;
	text-transform: uppercase;
	letter-spacing: 4px;
	transition: all 0.2s;

	&:active {
		transform: scale(0.9);
	}

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.complement2};
	}
`;

export const Errors = styled.small`
	color: ${({ theme }) => theme.colors.primary};
	position: absolute;
	left: 0;
	bottom: -20px;
`;

export const Figure = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 50%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	transform-origin: bottom;
	transform: skewX(-20deg);

	${mediaQuery("max", "768px")`
		display: none;
	`}
`;

export const Back = styled.a`
	position: absolute;
	left: 14%;
	top: 5%;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.background};

	& > svg {
		font-size: 2rem;
		margin-right: 0.3rem;
	}
`;
