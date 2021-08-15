import React from 'react'
import Card from './_card'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import zeroImg from '../Static/zero.jpg'
import dorsiaImg from '../Static/dorsia.jpg'
import lonelyPlanetImg from '../Static/lonely-planet.jpg'
import slackImg from '../Static/slack.jpg'
import copperImg from '../Static/copper.jpg'
import dropboxGuideImg from '../Static/dropbox-guide.jpg'

const portfolio = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ref, inView, entry] = useInView()

    const varients = {
        initial:{y: 50, opacity: 0},
        animate:{y: 0, opacity: 1}
    }

    const projectArray = [
        {
            name: 'Zero',
            role: 'Development, Branding, Product',
            image: zeroImg,
        },
        {
            name: 'Dorsia',
            role: 'Marketing',
            image: dorsiaImg,
        },
        {
            name: 'Lonely Planet',
            role: 'Development',
            image: lonelyPlanetImg,
        },
        {
            name: 'Slack',
            role: 'Marketing',
            image: slackImg,
        },
        {
            name: 'Copper',
            role: 'Design, Marketing',
            image: copperImg,
        },
        {
            name: 'Dropbox guide',
            role: 'Development',
            image: dropboxGuideImg,
        },

    ]

    return (
        <section className="h-auto text-center p-10 font-andadaPro">
            <motion.h2 className="text-4xl leading-relaxed tracking-wider mb-14 text-primary"
                variants={varients}
                animate={inView ? 'animate' : 'initial'}
                transition={{ease: "easeOut", duration: 0.8, delay: 0.2}}
                ref={ref}
            > 
                Projects
            </motion.h2>

            <div className="grid grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-x-5 gap-y-10">
                {projectArray.map(project => (
                    <Card key={project.name} title={project.name} position={project.role} image={project.image} />
                ))}
            </div>
        </section>
    )
}

export default portfolio
