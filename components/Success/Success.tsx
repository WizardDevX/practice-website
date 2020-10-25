import React from "react";
import Link from "next/link";
import { Card, Message, Back } from "./styles";
import { MdBackspace } from "react-icons/md";

const SuccesMessage = () => {
	return (
		<Card>
			<Message>Sus datos fueron procesados con exito.</Message>
			<Link href="/">
				<Back>
					<MdBackspace /> Volver al Inicio
				</Back>
			</Link>
		</Card>
	);
};

export default SuccesMessage;
