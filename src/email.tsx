import React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Button } from "@react-email/button";

type Props = {
  url: string;
};

function Email({ url }: Props) {
  return (
    <Html lang="pt-BR">
      <Text>Faaala Devs!</Text>

      <Button href={url}>Clique aqui!</Button>
    </Html>
  );
}

export default Email;
