import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";
import facebookLogo from "../../public/facebook.png";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");

    const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, contact, subject, message } = JSON.parse(event.body);

  // Configure transporter (use environment vars)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // app password (strongly recommended)
    },
  });

  const mailOptions = {
    from: `"Website" <${process.env.EMAIL_USER}>`,
    to: "tarunkumarreddy60922@gmail.com",
    subject: `New contact form: ${subject || "No subject"}`,
    text: `Name: ${name}\nContact: ${contact}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Contact:</strong> ${contact}</p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
};
fetch("/.netlify/functions/sendForm", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
})
.then(res => res.json())
.then(() => { /* success UI */ })
.catch(err => { /* error UI */ });
  }

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/tarunreddy8689" },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/tarun-kumar-reddy8689/",
    },
    { img: gmailLogo, title: "Email", link: "mailto:tarunkumarreddy6092@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/+918217351343" },
    { img: instagramLogo, title: "Instagram", link: "https://www.instagram.com/tarun__reddy/" },
    
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "radial-gradient(circle at 25% 25%, rgba(0,255,200,0.08), transparent 80%)",
        color: "#fff",
        padding: "2rem 1.5rem 4rem",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2.6rem",
          margin: "1.5rem 0 0.5rem 0",
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          maxWidth: "700px",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* 🌟 Quick Links */}
      <motion.div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          marginBottom: "2.2rem",
        }}
      >
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid var(--accent)",
                background: "rgba(255,255,255,0.05)",
                padding: "8px",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* 💌 Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          aria-label="Your name"
          style={inputStyle}
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Email or Phone"
          value={form.contact}
          onChange={handleChange}
          required
          aria-label="Your contact info"
          style={inputStyle}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          aria-label="Subject"
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          aria-label="Your message"
          style={{ ...inputStyle, resize: "none" }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          🚀 Send Message
        </motion.button>

        {/* Animated status */}
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ marginTop: 10, color: "#0ff", fontWeight: 500 }}
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  outline: "none",
};
