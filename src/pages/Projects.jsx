import { motion } from "framer-motion";

// Import images from assets folder
import chatbotImg from "../assets/chatbot.jpg";
import skinImg from "../assets/skin.jpg";
import skinCancerImg from "../assets/skincancer.jpg";
import info1Img from "../assets/info (1).png";
import info2Img from "../assets/info (2).png";
import dashboardImg from "../assets/Dashboard.png";
import schoolLoginImg from "../assets/school_login.png";
import schoolImg from "../assets/school.png";

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="projects-page">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <h2 className="projects-page-title">My Projects</h2>

                <motion.div className="project-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                    <h1>Ayurvedic Healthcare Chatbots</h1>
                    <h3>Tools and Technologies used:</h3>
                    <p className="tools">VsCode, Python, Flask, Html, Css</p>

                    <h3>Description:</h3>
                    <p className="desc">
                        Developed an AI-Powered chatbot designed to provide users with
                        personalized Ayurvedic health advice, natural remedies, and lifestyle
                        suggestions based on Dosha Analysis
                    </p>

                    <img src={chatbotImg} alt="chatbot" />
                </motion.div>

                <motion.div className="project-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                    <h1>Skin Cancer Detection</h1>
                    <h3>Tools and Technologies used:</h3>
                    <p className="tools">
                        Vscode, Python, Tensorflow, Numpy, Matplotlib, Html, Css
                    </p>

                    <h3>Description:</h3>
                    <p className="desc">
                        Develop an AI based system to detect Skin Cancer from dermoscpic images
                        using deep learning techniques. <br />
                        The model classifies skin lesion. CNN model used for analyze the
                        images.
                    </p>

                    <img src={skinImg} alt="skin" />
                    <img src={skinCancerImg} alt="skincancer" />
                </motion.div>

                <motion.div className="project-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                    <h1>Infoyashonand Technology Website</h1>
                    <h3>Tools and Technologies used:</h3>
                    <p className="tools">
                        React js ,Tailwind css,Firebase
                    </p>

                    <h3>Description:</h3>
                    <p className="desc">
                        Designed and developed the official company website for Infoyashonand Technology. <br />
                        Focused on creating a responsive, modern, and user-friendly interface that highlights the company's services and portfolio.
                    </p>

                    <h3>Project Link:</h3>
                    <p className="desc">
                        <a href="https://infoyashonand-technology-website.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>
                            View Live Project <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '5px' }}></i>
                        </a>
                    </p>

                     <img src={info2Img} alt="Infoyashonand site 2" />
                    <img src={info1Img} alt="Infoyashonand site 1" />
        
                </motion.div>

                <motion.div className="project-card" variants={itemVariants} whileHover={{ scale: 1.02 }}>
                    <h1>School Management Software</h1>
                    <h3>Tools and Technologies used:</h3>
                    <p className="tools">
                        React js,Tailwind css,Firestore
                    </p>

                    <h3>Description:</h3>
                    <p className="desc">
                       Developed Smart Shala, a React-based school management system 
                       that manages students, staff, attendance, fees, and academic 
                       operations using a centralized dashboard with real-time data 
                       storage powered by Firestore. The system features a structured 
                       admin dashboard displaying key insights such as total students, 
                       online/offline student count, fee collection, staff details, and active classes.
                    </p>
                    
                    <h3>Project Link:</h3>
                    <p className="desc">
                        <a href="https://schoolmanagement-nu.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>
                            View Live Project <i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: '5px' }}></i>
                        </a>
                    </p>

                    <img src={schoolLoginImg} alt="School management login" />
                    <img src={dashboardImg} alt="School management dashboard" />
                    <img src={schoolImg} alt="School management" />
                </motion.div>
            </motion.div>
        </div>
    );
}
