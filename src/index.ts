import { getStatusGame } from "controllers";
import { sendgridMail } from "./controllers/sendgrid";
import schedule from "node-schedule";

schedule.scheduleJob("* * * * *", async () => {
  const msg = {
    to: <string>process.env.EMAIL_PERSONAL,
    from: <string>process.env.EMAIL_REMITENTE,
    subject: `¡YA DISPONIBLE HOGWARDS LEGACY!`,
    html: `Ya se crackeó hogwards legacy, anda a descargarlo papá`,
  };

  try {
    const res = await getStatusGame();
    if (res) {
      await sendgridMail(msg);
      console.log("enviado");
    }
  } catch (error) {
    console.log(error);
  }
});
