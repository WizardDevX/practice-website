import React from "react";
import Link from "next/link";
import { StyledFooter, Social, Text, link } from "./styles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<StyledFooter>
			<Text>&copy; Desarrollado por Jonathan Alvarado.</Text>
			<Social>
				<Link href="#">
					<a css={link}>
						<FaFacebook />
					</a>
				</Link>
				<Link href="#">
					<a css={link}>
						<FaTwitter />
					</a>
				</Link>
				<Link href="#">
					<a css={link}>
						<FaInstagram />
					</a>
				</Link>
			</Social>
		</StyledFooter>
	);
};

export default Footer;
