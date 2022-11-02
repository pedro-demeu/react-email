import React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Avatar, AvatarFallback, AvatarImage } from "@react-email/avatar";
import { Head } from "@react-email/head";

const container: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  width: "auto",
  maxWidth: "100%",
};
const imageStyles: React.CSSProperties = {
  width: "auto",
};
const headerContainer: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  backgroundColor: "red",
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const title: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 18,
  fontWeight: "600",
  color: "#fff",
};
const redColor: React.CSSProperties = {
  color: "red",
};
const mainContainer: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  padding: 16,
  backgroundColor: "#f7f7f7",
};
const paragraph: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 16,
};
const buttonContainer: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
const buttonStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  minWidth: 224,
  height: 32,
  backgroundColor: "red",
  textTransform: "uppercase",
  padding: 8,
  borderRadius: 8,
  color: "#FFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
};
const footerContainer: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  marginTop: 16,
  display: "flex",
  alignItems: "center",
};
const aboutContainer: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  display: "flex",
  flexDirection: "column",
  marginLeft: 8,
  maxWidth: "100%",
};

type Props = {
  url: string;
};

function Email({ url }: Props) {
  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        </style>
      </Head>
      <Html lang="pt-BR">
        <Container style={container}>
          <div style={headerContainer}>
            <Text style={title}>React Email Implementation</Text>
          </div>
          <div style={mainContainer}>
            <Text style={paragraph}>
              Olá <b style={redColor}>Pessoa</b>,
            </Text>
            <Text style={paragraph}>
              Este e-mail foi enviado de forma automática, através de uma lib
              frontend chamada:
              <b style={redColor}>&nbsp;react-email</b>
            </Text>
            <Text style={paragraph}>curtiu?</Text>
            <div style={buttonContainer}>
              <Button href={url} style={buttonStyle}>
                Visualize no github
              </Button>
            </div>
            <div style={footerContainer}>
              <div style={aboutContainer}>
                <img
                  src="https://github.com/pedro-demeu/assinatura-digital/blob/master/ASSINATURA.png?raw=true"
                  alt="Assinatura Digital"
                  style={imageStyles}
                />
              </div>
            </div>
          </div>
        </Container>
      </Html>
    </>
  );
}

export default Email;
