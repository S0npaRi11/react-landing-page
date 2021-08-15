import React from 'react'
import {motion} from 'framer-motion'

const card = ({ title= '', position = '', image = '', link=  '', desc = '' }) => {

    return (
        <motion.div className="text-center flex flex-col h-auto w-auto pb-5 border border-black overflow-hidden"
            whileHover={{scale: 0.97}}
            transition={{ease: "easeOut", duration: 0.6}}
        >
            { image !== '' && 
                <motion.img 
                    src={image} alt={image} className="w-full h-64 object-cover overflow-hidden"
                    whileHover={{scale: 1.2, opacity: 0.7}}
                    transition={{ease: "easeOut", duration: 0.6}}
                />
            }
            <div className="p-2" style={{zIndex: 2, backgroundColor: '#fff'}}>
                {title !== '' && <h3 className="text-xl font-bold py-1"> {title} </h3>}
                {position !== '' && <p className="text-md font-light py-1"> {position} </p>}
                {link !== '' && <a href={link}> View More </a>}
                { desc !== '' && <p className="text-md font-light py-1"> {desc} </p>}
            </div>
        </motion.div>
    )
}

export default card
