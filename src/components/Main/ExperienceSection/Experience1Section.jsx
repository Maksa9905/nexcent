import "./ExperienceSection.css"

import experience_illustration from "../MainAssets/experience-illustration.svg"

export default function ExperienceSection() {
    return (
        <section className='experience'>
          <div className='experience__inner container'>
            <div className='experience-illustration'>
              <img src={experience_illustration} alt="" />
            </div>
            <div className='experience-body'>
              <h2>The unseen of spending three years at Pixelgrade</h2>
              <p className='body3 regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
              <button>Learn More</button>
            </div>
          </div>
        </section>
    )
}