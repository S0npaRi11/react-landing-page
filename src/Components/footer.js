import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const footer = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ref, inView, entry] = useInView()

    const varients = {
        initial:{y: 50, opacity: 0},
        animate:{y: 0, opacity: 1}
    }

    return (
        <>
            <section className="h-auto px-10 font-andadaPro bg-secondary">
            <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-4 gap-5 justify-items-center">
                <div className="">
                    <motion.h2 className="text-4xl leading-relaxed tracking-wider mt-14 mb-6 md:my-14"
                        variants={varients}
                        animate={inView ? 'animate' : 'initial'}
                        transition={{ease: "easeOut", duration: 0.8, delay: 0.2}}
                        ref={ref}
                    > 
                        Let's Talk
                    </motion.h2>

                    <motion.a className="p-4 my-5 border border-black inline-block transition duration-600 hover:bg-primary" href="/"
                        variants={varients}
                        animate={inView ? 'animate' : 'initial'}
                        transition={{ease: "easeOut", duration: 0.8, delay: 0.4}}
                    > Tell us everything </motion.a>
                </div>
                <div className="md:my-16">
                    <ul>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Clients </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> About </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> News </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Contact </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Careers </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Press </a> </motion.li>
                    </ul>
                </div>

                <div  className="md:my-16 hidden md:block">
                    <ul>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> San Fransisco  </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> New York </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Los Angeles </a> </motion.li>
                    </ul>
                </div>

                <div  className="md:my-16">
                    <ul>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Newslatter </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Blog </a> </motion.li>
                        <motion.li className="p-1 transition duration-600 hover:text-white"
                            whileHover={{x:20}}
                            transition={{ease: "easeOut", duration: 0.1}}
                        > <a href="/"> Playground </a> </motion.li>
                    </ul>
                </div>
            </div>
        </section>

        <div className="flex flex-row flex-wrap justify-around content-center bg-tertiory text-white">
            <span className="px-5 py-5 hidden md:block">
               <a href="/" className="transition duration-600 hover:text-secondary">  C </a>
            </span>

            <span className="flex flex-row justify-between p-2">
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaFacebook className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaTwitter className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaInstagram className="text-xl" /> </a>
                <a className="px-3 py-5 transition duration-600 hover:text-secondary" href="/"> <FaLinkedinIn className="text-xl" /> </a>
            </span>
        </div>
        </>
    )
}

export default footer
