const nodemailer = require("nodemailer");
const registrationCompletion = require("./templates/registrationMail");

function sendMail(name, email, password) {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host:"afternoon-garden-29640.herokuapp.com",
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    let mailOptions = {
      from: " MOVIE APP '<process.env.EMAIL>'",
      to: email,
      subject: "Registration SuccessFull",
      html: registrationCompletion(name, email, password),
    };
    // Send the Mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Mail Send Error ", error);
      } else {
        console.log(
          "Registration confirmation has been send to Your Mail Id " + email
        );
      }
    });
  });
}
module.exports = sendMail;
