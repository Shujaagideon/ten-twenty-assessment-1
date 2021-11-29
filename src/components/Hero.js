import Header from "./Header"
import backgroundVideo from '../assets/bgVideo.mp4'
import '../styles/hero.css'

const Hero = () => {
    return (
        <>
            <div className="cover">
                <Header />
                <div className="bg">
                    <video autoPlay loop muted>
                        <source src={backgroundVideo}/>
                    </video>
                </div>
                <div className="hero-info">
                    <div className="question">
                        <p>if not now then when?</p>
                    </div>
                    <div className="heading-text">
                        <p>Time to make your wealth work for you.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
