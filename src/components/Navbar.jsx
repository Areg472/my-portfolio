import {Link} from "react-router-dom";
import {motion} from "motion/react";

export function Navbar() {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-10 md:space-y-0">
                <motion.div initial={{y: -120}}
                            transition={{type: "spring", duration: 1.5, bounce: 0.55, delay: 1}} animate={{y: 0}}>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <Link to={"/"}>
                            <p className="text-2xl font-bold text-white">Home</p>
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} initial={{y: -120}}
                            transition={{type: "spring", duration: 2, bounce: 0.6, delay: 1}} animate={{y: 0}}>
                    <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <Link to={"/Work"}>
                            <p className="text-2xl font-bold text-white">Work</p>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}