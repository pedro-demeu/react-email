import { render } from "@react-email/render";
import nodemail from "nodemailer";
import { AttachmentLike } from "nodemailer/lib/mailer";
import { Readable } from "nodemailer/lib/xoauth2";
import { ReactNode } from "react";
import Email from "./email";

interface EmailConfigs {
  host: string;
  port: number;
  auth: {
    user: string;
    pass: string;
  };
}

interface EmailOptions {
  from: string; // "pdemeu@dogcode.dev";
  to: string; //"some@one.dev";
  subject: string; //"Temos uma novidade para você o/";
  html: string | Buffer | Readable | AttachmentLike | undefined; // emailTemplate
}

export const ReactEmail = ({
  configs,
  options,
}: {
  configs: EmailConfigs;
  options: EmailOptions;
}) => {
  const handleSubmit = () => {
    const transporter = nodemail.createTransport({ ...configs });
    transporter.sendMail(options).then(() => console.log("Enviado!"));
  };

  return (
    <div>
      Hello world!
      <button onClick={handleSubmit}>Click here to send E-mail</button>
    </div>
  );
};
