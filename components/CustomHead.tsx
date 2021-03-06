import React, { FC } from "react";
import Head from "next/head";
import { IHead } from "../interfaces";

const CustomHead: FC<IHead> = ({ title = "Techworld", children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			{children}
		</>
	);
};

export default CustomHead;
