const express = require("express");
const nodemailer = require("nodemailer");
const { mailTemplate } = require("./mailTemplate");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 8000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.use(cors());
app.use(express.json());

app.post("/send-email", upload.single("attachment"), async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: mailTemplate(text),
      attachments: [
        {
          filename: "qr_cards.zip",
          content: req.file.buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error occurred:", error.message);
    res.status(500).json({ error: "Error occurred while sending email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
