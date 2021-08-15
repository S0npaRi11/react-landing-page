import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {motion } from 'framer-motion'
// import { delay } from 'q'

const _sidenav = ({ closeNav }) => {
    return (
        <motion.section className="w-screen h-screen bg-white z-20 fixed px-10 font-andadaPro text-primary"
            initial={{x:"200vw"}}
            animate={{x:0}}
            transition={{ease:"easeOut", duration: 0.6}}
        >
            <span className="flex flex-row justify-end py-5">
                <FaTimes  className="text-3xl" onClick={closeNav}/>
            </span>

            <div>
                <motion.ul
                    initial={{y:50, opacity:0}}
                    animate={{opacity: 1, y:0}}
                    transition={{ease: "easeOut", staggerChildren:0.5, delay: 0.6}}
                >
                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > <a href="/"> Services </a> </motion.li>
                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > <a href="/"> Clients </a> </motion.li>
                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > <a href="/"> Careers </a> </motion.li>
                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > <a href="/"> About </a> </motion.li>
                    <motion.li className="my-8 text-2xl"
                        initial={{opacity: 0, y: 50}}
                        animate={{opacity: 1}}
                    > <a href="/"> Contact </a> </motion.li>
                </motion.ul>
            </div>
        </motion.section>
    )
}

export default _sidenav
