import { motion } from "framer-motion";

export default function Index() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .15 }}
        >
            <p>
            This is the index page.
            </p>
        </motion.div>
    );
  }