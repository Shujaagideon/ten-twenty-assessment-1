import { ReactComponent as Flower } from '../assets/flower.svg'
import '../styles/section2.css';
import IntersectionObserver from '../utils/intersectionObserver';



const Section = () => {
    return (
        <>
            <div className="section2">
                <div className="section2-info">
                    <IntersectionObserver>
                        <div className="heading-text">
                            <p>Building a lasting legacy for individuals, families and businesses globally</p>
                        </div>
                    </IntersectionObserver>
                    <IntersectionObserver>
                        <div className="question">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </IntersectionObserver>
                </div>
                <Flower className='flower' />
            </div>
        </>
    )
}

export default Section
