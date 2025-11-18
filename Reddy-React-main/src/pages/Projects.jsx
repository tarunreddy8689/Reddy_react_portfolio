import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import project1 from "../assets/portfolio-images/64bitradix.jpg";
import project2 from "../assets/portfolio-images/cinisphere.jpg";
import project3 from "../assets/portfolio-images/foodapplication.jpg";
import project4 from "../assets/portfolio-images/fleetmanagement.jpg";
import project5 from "../assets/portfolio-images/project 2.png";


const PROJECTS = [
  {
    title: "⚙️ 64-bit Radix-16 Booth Multiplier",
    desc: "Designed an optimized 64-bit hardware multiplier using the Radix-16 Booth algorithm to reduce circuit complexity and delay for high-performance computing applications.",
    ss: project1,
    tech: ["Verilog", "VLSI", "Digital Design", "Xilinx Vivado"],
    live: "#",
    code: "https://github.com/tarunreddy8689/Booth-Multiplier"
  },
  {
    title: "🎬 CineSphere – Movie Discovery Website",
    desc: "Developed a responsive React-based movie browsing platform with dynamic data rendering, reusable components, and smooth UI interactions for seamless user experience.",
    ss: project2,
    tech: ["React", "HTML", "CSS", "JavaScript"],
    live: "https://cinisphere.netlify.app/",
    code: "https://github.com/tarunreddy8689/CineSphere"
  },
  {
    title: "🍔 Food Delivery Web Application",
    desc: "Built a full-stack food delivery platform featuring restaurant listing, menu browsing, cart management, and order tracking using MVC architecture for clean structure and scalability.",
    ss: project3,
    tech: ["Java", "JSP", "Servlets", "Hibernate", "MySQL"],
    live: "#",
    code: "https://github.com/tarunreddy8689"
  },
  {
    title: "🚚 Fleet Management System",
    desc: "Developed a web-based fleet management system to monitor vehicles, track routes, and manage drivers efficiently with a clean and responsive dashboard interface.",
    ss: project4,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://reddytruckz.vercel.app/",
    code: "https://github.com/tarunreddy8689/Fleet-Management-System"
  },

  {
    title: "🌐 Personal Portfolio Website",
    desc: "Created a responsive personal portfolio using React to showcase projects, resume, and skills with a clean and modern interface.",
    ss: project5,
    tech: ["HTML", "CSS", "JavaScript","React","Framer Motion","Tailwind CSS"],
    live: "#",
    code: "https://github.com/tarunreddy8689/Portfolio"
  }
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>

        <p className="text-gray-400 mb-10">
          A collection of my major works — blending research, Hardware and Software Projects.
        </p>

        <div className="projects-grid"
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'hidden',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div className="ss" whileHover={{ scale: 1.05 }} style={{ borderRadius: 12, overflow: 'hidden' }}>
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
