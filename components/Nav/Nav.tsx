import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navbar, Logo, Menu, Item, LinkUrl, Button, Lines } from "./styles";

const Nav = () => {
	const links = [
		["Home", "/"],
		["Sobre Nosotros", "#about"],
		["Servicios", "#services"],
		["Testimonios", "#testimonials"],
		["Galeria", "#galery"],
	];

	const [open, setOpen] = useState<boolean>(false);

	const openMenu = () => {
		setOpen(prevState => !prevState);
	};

	useEffect(() => {
		const navbar = document.querySelector("#navbar");
		const header = document.querySelector("#header");

		const io = new IntersectionObserver(
			(entries, _) => {
				entries.forEach(entry => {
					if (!entry.isIntersecting) {
						navbar?.classList.add("scrolled");
					} else {
						navbar?.classList.remove("scrolled");
					}
				});
			},
			{
				root: null,
				rootMargin: "-100px",
				threshold: 0.1,
			}
		);

		if (header) io.observe(header);

		return () => {
			io.disconnect();
		};
	}, []);

	return (
		<Navbar id="navbar">
			<Logo>Logo</Logo>
			<Button onClick={openMenu}>
				<Lines open={open} />
			</Button>
			<Menu open={open}>
				{links.map((link, idx) => {
					return (
						<Item key={idx}>
							<Link href={link[1]}>
								<LinkUrl onClick={openMenu}>{link[0]}</LinkUrl>
							</Link>
						</Item>
					);
				})}
			</Menu>
		</Navbar>
	);
};

export default Nav;
