import { css } from "styled-components";

export const mediaQuery = (minmax: string, size: string) => (
	rules: TemplateStringsArray | any
) => css`@media screen and (${minmax}-width: ${size}){ ${rules} }`;
