import "./Main.css"

import Slider from "./Slider/Slider"
import OurClientsSection from "./OurClientsSection/OurClientsSection"
import FeaturesSection from "./FeaturesSection/FeaturesSection"
import Experience1Section from "./ExperienceSection/Experience1Section"
import StatsSection from "./StatsSection/StatsSection"
import Experience2Section from "./ExperienceSection/Experience2Section"
import AuthorWordsSection from "./AuthorWordsSection/AuthorWordsSection"
import CommunitySection from "./CommunitySection/CommunitySection"
import SloganSection from "./SloganSection/SloganSection"

export default function Main() {
    return(
    <main className="main">
        <Slider></Slider>
        <OurClientsSection></OurClientsSection>
        <FeaturesSection></FeaturesSection>
        <Experience1Section></Experience1Section>
        <StatsSection></StatsSection>
        <Experience2Section></Experience2Section>
        <AuthorWordsSection></AuthorWordsSection>
        <CommunitySection></CommunitySection>
        <SloganSection></SloganSection>
    </main>
    )
}