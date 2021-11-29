import Hero from "../components/Hero"
import Section from "../components/Section2"
import Section3 from "../components/Section3"
import SmoothScroll from "../utils/smoothScroll"

const PageOne = () => {
    return (
        <>
        <SmoothScroll>
            <Hero/>
                <Section />
                <Section3 />
        </SmoothScroll>
        </>
    )
}

export default PageOne
