/// <reference types="next" />
/// <reference types="next/types/global" />

import {} from "styled-components/cssprop";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			complement1: string;
			complement2: string;
			background: string;
		};
	}
}
