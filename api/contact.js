import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_PASS = process.env.GMAIL_PASS;
  const TO_EMAIL = process.env.TO_EMAIL || "seanjameslacaba@gmail.com";

  if (!GMAIL_USER || !GMAIL_PASS) {
    return res
      .status(500)
      .json({ error: "Mail credentials are not configured on the server" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: GMAIL_USER,
      to: TO_EMAIL,
      subject: `Website contact from ${name || email || "Website"}`,
      text: `From: ${name || ""} <${email || ""}>\n\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true, info });
  } catch (err) {
    console.error("Failed to send email", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
