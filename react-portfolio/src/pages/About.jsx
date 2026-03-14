import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="about-page">
            <div className="header">About Myself</div>
            <div className="container">

                <motion.div
                    className="about"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="section-title">Introduction</div>
                  <p>
          Hello, I’m <strong>Isha Dadaso Gaikwad</strong>.<br></br> I completed my Diploma in
          Computer Engineering from Abhaysinhraje Bhonsale Institute Of Technology,
          and I am currently pursuing B.Tech in Artificial Intelligence and
          Machine Learning (AIML) at Dr. D. Y. Patil University.
        </p>

        <p>
          I am passionate about Web Development and Data Analytics, with a strong
          interest in building creative, responsive, and user-friendly web
          applications as well as analyzing data to generate meaningful insights.
          I enjoy turning ideas into real-world digital solutions using
          technologies such as HTML, CSS, and modern frameworks like React.js.
        </p>

        <p>
          Currently, I am expanding my knowledge in Data Analytics, working with
          tools like Microsoft Excel, Microsoft Power BI, SQL, and Python to
          analyze and visualize data effectively.
        </p>

        <p>
          I enjoy learning new technologies, building practical projects, and
          improving my problem-solving skills. My goal is to become a skilled
          developer and data professional who can build intelligent and
          data-driven solutions.
        </p>

        <p>
          Apart from coding and analytics, I enjoy playing Volleyball, which helps
          me stay active and strengthens my teamwork and leadership skills.
        </p>

                    <div className="section-title">Technical Skills</div>
                    <ul className="skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React js</li>
                        <li>Tailwind css</li>
                        <li>Excel</li>
                        <li>PowerBi</li>
                        <li>Python</li>
                        <li>Firebase</li>
                        <li>SQL</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="skills"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="section-title">Soft Skills</div>
                    <ul>
                        <li>Project Management</li>
                        <li>Team Work</li>
                        <li>Public Relation</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
