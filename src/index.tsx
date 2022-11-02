import { render } from "@react-email/render";
import nodemail from "nodemailer";
import Email from "./email";

const transporter = nodemail.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "228f1342bd627c",
    pass: "efe8d4a034dd5d",
  },
});

const emailHtml = render(<Email url="https:linkedin.com/in/pdemeu" />);

const options = {
  from: "pdemeu@dogcode.dev",
  to: "some@one.dev",
  subject: "Temos uma novidade para você o/",
  html: emailHtml,
};

transporter.sendMail(options).then(() => console.log("Enviado!"));
