import { motion } from 'framer-motion'

export const PageTransition = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    },
};

const TransitionPage = ({ children }) => <motion.div initial="out"
    animate="in"
    exit="out"
    variants={PageTransition}>{children}</motion.div>

export default TransitionPage