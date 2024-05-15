import "./CommunitySection.css"

import community_image1 from "../MainAssets/community-image1.png"
import community_image2 from "../MainAssets/community-image2.png"
import community_image3 from "../MainAssets/community-image3.png"

export default function CommunitySection() {
    return(
        <section className='community'>
        <div className='community__inner container'>
          <h2>Caring is the new marketing</h2>
          <p className='regular body2 community-paragraph'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
          <ul className='community-list'>
            <li className='community-item'>
              <div className='community-item-image-container'>
                <img src={community_image1} alt="" />
              </div>
              <div className='community-item-description'>
                <h4>Creating Streamlined Safeguarding Processes with OneRen</h4>
                <button style={{display: "inline-flex", gap: "8px"}} className="transparent">
                  <h4 style={{color: "var(--primary)"}}>Readmore</h4>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </li>
            <li className='community-item'>
              <div className='community-item-image-container'>
                <img src={community_image2} alt="" />
              </div>
              <div className='community-item-description'>
                <h4>What are your safeguarding responsibilities and how can you manage them?</h4>
                <button style={{display: "inline-flex", gap: "8px"}} className="transparent">
                  <h4 style={{color: "var(--primary)"}}>Readmore</h4>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </li>
            <li className='community-item'>
              <div className='community-item-image-container'>
                <img src={community_image3} alt="" />
              </div>
              <div className='community-item-description'>
                <h4>Revamping the Membership Model with Triathlon Australia</h4>
                <button style={{display: "inline-flex", gap: "8px"}} className="transparent">
                  <h4 style={{color: "var(--primary)"}}>Readmore</h4>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
}