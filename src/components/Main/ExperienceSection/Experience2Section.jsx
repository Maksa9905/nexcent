import "./ExperienceSection.css"

import experience_illustration2 from "../MainAssets/experience-illustration2.svg"

export default function Experience2Section() {
    return (
        <section className='experience'>
          <div className='experience__inner container'>
            <div className='experience-illustration'>
              <img src={experience_illustration2} alt="" />
            </div>
            <div className='experience-body'>
              <h2>How to design your site footer like we did</h2>
              <p className='body3 regular'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
              <button>Learn More</button>
            </div>
          </div>
        </section>
    )
}