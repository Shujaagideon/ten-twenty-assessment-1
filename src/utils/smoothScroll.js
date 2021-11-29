import { useRef, useEffect, useState } from 'react'
import '../styles/smoothScroll.css'

const SmoothScroll = ({ children }) => {
    let current = 0;
    let target = 0;
    let scrollPos = 0;
    let ease = 0.1;


    useEffect(() => {
        window.scrollTo({ top: 0 });
        SetAnim();
    }, [])

    const Wrapper = useRef(document.body);

    const Lerp = (start, end, speed) => {
        return start * (1 - speed) + end * speed;
    }
    const SetAnim = () => {
        let refHeight = Wrapper.current !== null && Wrapper.current.getBoundingClientRect().height
        document.body.style.height = `${refHeight}px`;

        Animation()
    }

    const Animation = () => {

        current = Lerp(current, target, ease);
        current = parseFloat(current.toFixed(2));
        target = window.scrollY;
        scrollPos = ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);

        if (Wrapper.current !== null) Wrapper.current.style.transform = `translate3D(0, ${- current}px, 0)`

        requestAnimationFrame(Animation);
    }

    return (
        <div className='smooth-scroll-container'>
            <div className='wrapp' ref={Wrapper}>
                {children}
            </div>
        </div>
    )
}

export default SmoothScroll