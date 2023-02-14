import sgMail from "@sendgrid/mail";
const API_KEY = process.env.SENDGRID_APIKEY as string;
sgMail.setApiKey(API_KEY);
async function sendgridMail(msg: sgMail.MailDataRequired) {
  try {
    return await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    throw new Error("el mensaje no se ha podido enviar");
  }
}

export { sendgridMail };
