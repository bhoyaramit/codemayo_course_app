import { createTransport } from "nodemailer";



export const sendEmail = async (to, subject, text) => {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  
    await transporter.sendMail({
      to,
      subject,
      text,
    });
  };
// exports.sendEmail = async (options) => {
  
//     const transporter = nodemailer.createTransport({
//       host: "smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: "756c1e6abc0968",
//         pass: "b83d410f1cba08"
//       }
//     });
  
//         await transporter.sendMail({
  //     to,
  //     subject,
  //     text,from :"bhoyaramit9404@gmail.com"
  //   });
  // }