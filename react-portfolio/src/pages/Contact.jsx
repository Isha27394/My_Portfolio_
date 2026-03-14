import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="contact-page">
            <h2>Contact Me</h2>

            <motion.div
                className="contact-info"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p><strong>Email:</strong> gaikwadisha079@gmail.com</p>
                <p><strong>Phone:</strong> +91 9359990477</p>
                <p><strong>Location:</strong> Satara, Maharashtra, India</p>
                <p>
                    <strong>LinkedIn:</strong>
                    <a href="www.linkedin.com/in/
isha-gaikwad-6b7313304
" target="_blank" rel="noreferrer">www.linkedin.com/in/
isha-gaikwad-6b7313304</a>
                </p>
                <p>
                    <strong>GitHub:</strong>
                    <a href="https://github.com/Isha27394" target="_blank" rel="noreferrer">https://github.com/Isha27394</a>
                </p>
            </motion.div>
        </div>
    );
}
