import {motion} from "framer-motion";

const UpAndDown = ({children, className}) => {

    const upAndDownVariant = {
        initial: {
            y: -20,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.div
            className={className ? `${className}` : ''}
            variants={upAndDownVariant}
            initial="initial"
            animate="animate"
            transition={{
                ease: "linear",
                delay: 0.18}}>
            {children}
        </motion.div>
    )
};

export default UpAndDown;