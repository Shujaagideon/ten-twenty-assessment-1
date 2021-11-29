import '../styles/section3.css';
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion/dist/framer-motion';
import { info } from './cardInfo';
import Card from './cards';

const Section3 = () => {
    const ease = [0.6, 0.05, -0.01, 0.99];
    const [width, setWidth] = useState(0)
    const ref = useRef(null);
    useEffect(() => {
        setWidth(ref.current.getBoundingClientRect().right)
    }, [ref]);
    
    return (
        <>
            <div className="section3">
                <div className="window">
                    <motion.div className="section3-cover"
                        drag='x'
                        ref={ref}
                        dragElastic={0.08}
                        dragConstraints={{ left: -width + width/1.8, right: 0 }}
                    >
                        {
                            info.map((cardInfo, i)=>(
                                <Card key={i} info={cardInfo} />
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Section3
