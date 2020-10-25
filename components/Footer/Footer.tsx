import React from "react";
import Link from "next/link";
import { StyledFooter, Social, Text, link, List, Item } from "./styles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<StyledFooter>
				<List>
					<Item>Direccion: Caracas 1011, Distrito Capital</Item>
					<Item>Horario de trabajo: 8:00 AM a 4:00 PM</Item>
				</List>
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
				<Text>&copy; Desarrollado por Jonathan Alvarado.</Text>
			</StyledFooter>
		</>
	);
};

export default Footer;
