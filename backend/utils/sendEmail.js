import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: process.env.EMAIL_USER, // must match verified sender
    subject,
    html,
  };

  await sgMail.send(msg);
};

export default sendEmail;