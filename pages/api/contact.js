/* eslint-disable import/no-anonymous-default-export */
export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "info@tienphong.it",
    to: "info@tienphong.it",
    subject: `Message From Tienphong.it`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
    <div><strong>Name:</strong> ${req.body.fullName}</div>
    <br/>
    <div><strong>Company:</strong> ${req.body.company}</div>
    <br/>
    <div><strong>Email:</strong> ${req.body.email}</div>
    <br/>
    <div><strong>Phone:</strong> ${req.body.phone}</div>
    <br/>
    <div><strong>Message:</strong> ${req.body.message}</div>
    <br/>
    <p>Sent from:
      ${req.body.email}</p>`,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
        res.status(400).json({ status: "Fail" });
      } else {
        console.log('INFO ' + info);
        resolve(info);
        res.status(200).json({ status: "OK" });
      }
    });
  });
}
