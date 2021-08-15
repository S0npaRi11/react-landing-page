import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const about = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ref, inView, entry] = useInView()

    const varients = {
        initial:{y: 50, opacity: 0},
        animate:{y:0,opacity: 1}
    }

    return (
        <section className="h-screen flex flex-wrap px-10 content-around text-center font-andadaPro text-primary">
            <div>
                <motion.h2 className="text-2xl leading-loose tracking-wider md:text-4xl"
                    variants={varients}
                    animate={inView ? 'animate' : 'initial'}
                    transition={{ease: "easeOut", duration: 0.8, delay: 0.2}}
                    ref={ref}
                > 
                    Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
                </motion.h2>

                <a className="p-4 my-5 border border-black inline-block transition duration-600 hover:bg-primary" href="/"
                //    variants={varients}
                //    animate={inView ? 'animate' : 'initial'}
                //    transition={{ease: "easeOut",duration: 0.8,delay: 0.4}}
                > Contact Us </a>
            </div>

        </section>
    )
}

export default about
