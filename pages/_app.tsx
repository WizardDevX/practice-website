import App from "next/app";
import {
	ThemeProvider,
	createGlobalStyle,
	DefaultTheme,
} from "styled-components";

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
	}	


	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-family: sans-serif;
		scroll-behavior: smooth;
	}

	body {
		background-color: ${({ theme }) => theme.colors.background};
	}

	.leaflet-container {
		margin: 4rem auto;
		width: 80%;
		height: 400px;
		z-index: 1;
	}

`;

const theme: DefaultTheme = {
	colors: {
		primary: "#E63946",
		secondary: "#A8DADC",
		complement1: "#457B9D",
		complement2: "#1D3557",
		background: "#F1FAEE",
	},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}
