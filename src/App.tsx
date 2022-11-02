import { render } from "@react-email/render";
import { ReactEmail } from "./services/config";
import Email from "./services/email";

export function App() {
  const emailTemplate = render(
    <Email url="https://github.com/pedro-demeu/react-email" />
  );
  {
    /* <ReactEmail
  options={{
    from: "pdemeu@dogcode.dev",
    to: "some@one.dev",
    subject: "Temos uma novidade para você o/",
    html: emailTemplate,
  }}
  configs={{
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "228f1342bd627c",
      pass: "efe8d4a034dd5d",
    },
  }}
/>; */
  }
  return <div>Welcome React Email Implementation</div>;
}
