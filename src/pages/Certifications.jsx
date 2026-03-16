import { motion } from "framer-motion";

export default function Certifications() {
    const certs = [
        { title: "Web Development", desc: "3 star It Solutions- 2024" },
        { title: "National Level Food Competition", desc: "D.Y.Patil Agricultural and Technical University - 2025" },
        { title: "NationalLevel Arduino Project Presentation", desc: "TKIT College" },
        { title: "National Level Certificate for ByteBattles", desc: "DKTE College" },
        { title: "Participated in National Level Certificate for TreatureHunt", desc: "Sanjivan College Of Engineering" },
        { title: "Experiential Learning", desc: "D.Y.Patil Agricultural and Technical University - 2025" },
        { title: "DataVisualization", desc: "certified by Linkedin-2025" },
        { title: "Python for Data Science", desc: "linkedin learning- 2025" },
        { title: "Machine Learning", desc: "Great Learning - 2025" },
        { title: "Data Analytics with Mathematical Statistics", desc: "D.Y.Patil International University Akurdi Pune -2025" },
        { title: "Best Intern of the Year", desc: "Infoyashonand Technology - 2025" },
        { title: "Introduction to Generative AI", desc: "IBM SkillsBuild - 2026" },
        { title: "Full Stack Development", desc: "Infoyashonand Technology - 2026" },
        { title: "Data Analytics", desc: "Infoyashonand Technology - 2026" },
        { title: "Football Competition 1st Prize", desc: "D.Y.Patil Agricultral and Technical University - 2025" },
        { title: "VollyBall 2nd Prize", desc: "D.Y.Patil Agricultral and Technical University - 2025" },
        { title: "District Level VollyBall RunnerUp", desc: "Satara District" }
    ];

    return (
        <div className="certifications-page">
            <h2>My Certifications & Achievements</h2>

            <motion.div
                className="certification-list"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
            >
                {certs.map((cert, i) => (
                    <motion.div
                        className="cert-card"
                        key={i}
                        variants={{
                            hidden: { y: 20, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>{cert.title}</h3>
                        <p>{cert.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
