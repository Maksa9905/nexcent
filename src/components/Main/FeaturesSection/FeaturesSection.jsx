import "./FeaturesSection.css"

import features_icon1 from "../MainAssets/features-icon1.svg"
import features_icon2 from "../MainAssets/features-icon2.svg"
import features_icon3 from "../MainAssets/features-icon3.svg"

export default function FeaturesSection() {
    return (
        <section className='features'>
          <div className='features__inner container'>
            <h2 className='features-title'>Manage your entire community <br/> 
            in a single system</h2>
            <p className='features-paragraph body2 regular'>Who is Nextcent suitable for?</p>
            <ul className='features-list'>
              <li className="features-item">
                <img className='features-icon' src={features_icon1} alt="" />
                <h3>Membership Organisations</h3>
                <p className='body3 regular'>Our membership management software provides full automation of membership renewals and payments</p>
              </li>
              <li className="features-item">
                <img className='features-icon' src={features_icon2} alt="" />
                <h3>National Associations</h3>
                <p className='body3 regular'>Our membership management software provides full automation of membership renewals and payments</p>
              </li>
              <li className="features-item">
                <img className='features-icon' src={features_icon3} alt="" />
                <h3>Clubs And Groups</h3>
                <p className='body3 regular'>Our membership management software provides full automation of membership renewals and payments</p>
              </li>
            </ul>
          </div>
        </section>
    )
}