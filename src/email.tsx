import React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Avatar, AvatarFallback, AvatarImage } from "@react-email/avatar";

const headerContainer: React.CSSProperties = {
  backgroundColor: "#485FEB",
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const title: React.CSSProperties = {
  fontSize: 18,
  fontWeight: "600",
  color: "#fff",
};
const mainContainer: React.CSSProperties = {
  padding: 16,
  backgroundColor: "#f7f7f7",
};
const paragraph: React.CSSProperties = {
  fontSize: 16,
};
const buttonContainer: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
};
const buttonStyle: React.CSSProperties = {
  minWidth: 224,
  height: 32,
  backgroundColor: "#485feb",
  textTransform: "uppercase",
  padding: 8,
  color: "#FFF",
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
};
const footerContainer: React.CSSProperties = {
  marginTop: 16,
  display: "flex",
  alignItems: "center",
};
const aboutContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginLeft: 8,
};

type Props = {
  url: string;
};

function Email({ url }: Props) {
  return (
    <Html lang="pt-BR">
      <Container>
        <div style={headerContainer}>
          <Text style={title}>React Email Implementation - @pdemeu</Text>
        </div>
        <div style={mainContainer}>
          <Text style={paragraph}>Olá Segmaker,</Text>
          <Text style={paragraph}>
            Olá, este e-mail foi enviado através de uma lib frontend chamada
            <b>react-email</b>
          </Text>
          <Text style={paragraph}>curtiu?</Text>

          <div style={buttonContainer}>
            <Button href={url} style={buttonStyle}>
              Deixe uma estrela no meu github
            </Button>
          </div>
        </div>
        <div style={footerContainer}>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
          <div style={aboutContainer}>
            <img src="" alt="Enviado por Pedro Demeu" />
          </div>
        </div>
      </Container>
    </Html>
  );
}

export default Email;
