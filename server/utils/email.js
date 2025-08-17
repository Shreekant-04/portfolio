const nodemailer = require("nodemailer");
const pug = require("pug");
const { htmlToText } = require("html-to-text");
const logger = require("./logger");

class Email {
  constructor(user, options = {}) {
    this.to = user.email;
    this.fullName = user.fullName;
    this.from = options.from || process.env.SMTP_USER;
    this.transporter = nodemailer.createTransport({
      // service: "gmail", // Use 'gmail' or your preferred email service
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Use `true` for port 465, `false` for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  verify() {
    this.transporter
      .verify()
      .then(() => {
        logger.info("smtp running");
      })
      .catch((err) => {
        logger.error(err.name, err);
      });
  }

  async send(templateName, subject, templateData = {}) {
    const html = pug.renderFile(
      `${__dirname}/../views/mail/${templateName}.pug`,
      {
        fullName: this.fullName,
        ...templateData,
      }
    );

    const isAdmin = this.to === "shreekant4062@gmail.com";

    const mailOptions = {
      from: isAdmin
        ? `Contact <shreekant4062@gmail.com>`
        : `Shreekant <shreekant4062@gmail.com>`,
      to: `${this.fullName} <${this.to}>`,
      replyTo: this.from,
      subject,
      html,
      text: htmlToText.toString(html),
    };
    const info = await this.transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  }

  async verifyEmail(otp, expiresIn) {
    return this.send("otp", `${otp} - Your OTP Code for Email Verification`, {
      otp,
      name: this.fullName,
      expiresIn: expiresIn || "5 minutes",
    });
  }

  async sendResetPasswordOtp(otp, expiresIn) {
    return this.send("otp", `${otp} - Reset Your Password OTP`, {
      otp,
      name: this.fullName,
      expiresIn: expiresIn || "5 minutes",
    });
  }

  async sendPasswordUpdated() {
    return this.send("passwordUpdated", "Your Password Was Updated");
  }

  async sendAutoReply({ fullname, message }) {
    return this.send("auto_reply", "Thanks for Contacting!", {
      fullname,
      message,
    });
  }

  async sendContactMessageToAdmin({ fullName, email, subject, message }) {
    return this.send("message", subject, {
      fullName,
      email,
      message,
    });
  }
}

module.exports = Email;
