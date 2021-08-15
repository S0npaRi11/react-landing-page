import React from 'react'
import { motion } from 'framer-motion'

import HeroImage from '../Static/hero-1.webp'

const hero = () => {
    return (
        <section className="h-screen font-andadaPro text-primary overflow-hidden">
            <motion.img src={HeroImage} alt={'hero'} className="relative object-cover w-full h-full filter blur-sm"
                initial={{scale:1.2}}
                animate={{scale: 1}}
                transition={{ease: "easeOut", duration: 2.4,}}
            />
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '98vw', textAlign: 'center'}}>
                    <motion.span 
                        className="text-sm"
                        initial={{opacity: 0, y: 50}}
                        animate={{y:0, opacity:1}}
                        transition={{ease: "easeOut", duration: 0.8, delay: 0.4}}
                    >

                        Featured Project 
                    </motion.span>    <br />
                <motion.h1 
                    className="text-4xl leading-relaxed tracking-wider"
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 0.8, delay: 0.2}}
                
                > 
                    Reuters News App <br />
                    <span className="text-gray-600"> News on the move </span> 
                </motion.h1>

                <motion.a 
                    className="p-4 my-5 border border-black inline-block transition duration-600 hover:bg-primary"
                    href="/"
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ease: "easeOut", duration: 0.8, delay: 0.6}}
                > 
                    More Projects 
                </motion.a>
            </div>
        
            {/* <Navbar /> */}
        </section>
    )
}

export default hero
