import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="Protfolio-container">
            <div className="left-container">
                <div className="icons">
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>

                <motion.div
                    className="content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="intro">
                        Hi! I am <span>Isha</span>
                    </p>
                    <h1>Web Developer.</h1>
                    <p className="detail">
                        I'm web Developer passionate about building clean and responsive
                        websites.
                    </p>
                    <div className="btn-container">
                        <button>Hire Me</button>
                        <button onClick={() => window.open('/IshaGaikwad.pdf', '_blank')}>Resume</button>
                    </div>
                </motion.div>
            </div>

            <div className="right-container"></div>

            <motion.div
                className="design"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="circle"></div>
                <div className="circle"></div>
            </motion.div>
        </div>
    );
}
