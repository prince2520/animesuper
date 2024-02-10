import {motion} from "framer-motion";

const ZoomInZoomOut = ({children, width}) => {
    return (
        <motion.div
            style={{width: `${width ? width : '100%'}`, height:"100%"}}
            whileHover={{ scale: 1.025}}
            whileTap={{ scale: 1}}>
            {children}
        </motion.div>
    )
};

export default ZoomInZoomOut;