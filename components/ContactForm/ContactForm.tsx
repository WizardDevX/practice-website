import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import {
	Container,
	Form,
	Title,
	InputBox,
	Input,
	PlaceHolder,
	TextArea,
	Submit,
	Errors,
	Figure,
	Back,
} from "./styles";
import { createGlobalStyle } from "styled-components";
import { Formik } from "formik";
import { MdBackspace } from "react-icons/md";

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${({ theme }) => theme.colors.complement2};
	}
`;

const ContactForm = () => {
	const router = useRouter();

	return (
		<>
			<GlobalStyle />
			<Link href="/">
				<Back>
					<MdBackspace /> Volver al Inicio
				</Back>
			</Link>
			<Container>
				<Title>Contactanos</Title>
				<Formik
					initialValues={{
						name: "",
						email: "",
						direction: "",
						subject: "",
						telephone: "",
						description: "",
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.required("Nombre es requerido.")
							.max(20, "Debe ser menor de 20 caracteres."),

						email: Yup.string()
							.email("Email no valido.")
							.required("Email es requerido."),

						direction: Yup.string().required(
							"Direccion es requerida."
						),

						subject: Yup.string().required("Asunto es requerido."),

						telephone: Yup.string()
							.required("Telefono es requerido.")
							.max(
								12,
								"Telefono debe ser menor de 12 caracteres."
							),

						description: Yup.string()
							.required("Descripcion es requerida.")
							.max(
								255,
								"Description no debe superar 255 caracteres."
							),
					})}
					onSubmit={(_, { setSubmitting }) => {
						setSubmitting(false);
						router.push("/success");
					}}>
					{formik => (
						<Form onSubmit={formik.handleSubmit}>
							<InputBox>
								<Input
									type="text"
									id="name"
									{...formik.getFieldProps("name")}
								/>
								<PlaceHolder hasContent={!!formik.values.name}>
									Nombre
								</PlaceHolder>
								{formik.touched.name && formik.errors.name ? (
									<Errors>{formik.errors.name}</Errors>
								) : null}
							</InputBox>
							<InputBox>
								<Input
									type="text"
									id="email"
									{...formik.getFieldProps("email")}
								/>
								<PlaceHolder hasContent={!!formik.values.email}>
									Email
								</PlaceHolder>
								{formik.touched.email && formik.errors.email ? (
									<Errors>{formik.errors.email}</Errors>
								) : null}
							</InputBox>
							<InputBox>
								<Input
									type="text"
									id="direction"
									{...formik.getFieldProps("direction")}
								/>
								<PlaceHolder
									hasContent={!!formik.values.direction}>
									Direction
								</PlaceHolder>
								{formik.touched.direction &&
								formik.errors.direction ? (
									<Errors>{formik.errors.direction}</Errors>
								) : null}
							</InputBox>
							<InputBox>
								<Input
									type="text"
									id="subject"
									{...formik.getFieldProps("subject")}
								/>
								<PlaceHolder
									hasContent={!!formik.values.subject}>
									Asunto
								</PlaceHolder>
								{formik.touched.subject &&
								formik.errors.subject ? (
									<Errors>{formik.errors.subject}</Errors>
								) : null}
							</InputBox>
							<InputBox>
								<Input
									type="text"
									id="telephone"
									{...formik.getFieldProps("telephone")}
								/>
								<PlaceHolder
									hasContent={!!formik.values.telephone}>
									Telefono
								</PlaceHolder>
								{formik.touched.telephone &&
								formik.errors.telephone ? (
									<Errors>{formik.errors.telephone}</Errors>
								) : null}
							</InputBox>
							<InputBox>
								<TextArea
									rows={5}
									id="description"
									{...formik.getFieldProps("description")}
								/>
								<PlaceHolder
									hasContent={!!formik.values.description}>
									Escribe Tu mensaje...
								</PlaceHolder>
								{formik.touched.description &&
								formik.errors.description ? (
									<Errors>{formik.errors.description}</Errors>
								) : null}
							</InputBox>
							<Submit disabled={formik.isSubmitting}>
								Submit
							</Submit>
						</Form>
					)}
				</Formik>
				<Figure />
			</Container>
		</>
	);
};

export default ContactForm;
