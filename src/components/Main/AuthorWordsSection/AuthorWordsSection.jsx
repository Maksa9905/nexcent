import "./AuthorWordsSection.css"

import author_portrait from "../MainAssets/author-portrait.jpeg"
import our_clients_logo1 from "../MainAssets/our-clients_logo1.svg"
import our_clients_logo2 from "../MainAssets/our-clients_logo2.svg"
import our_clients_logo3 from "../MainAssets/our-clients_logo3.svg"
import our_clients_logo4 from "../MainAssets/our-clients_logo4.svg"
import our_clients_logo5 from "../MainAssets/our-clients_logo5.svg"
import our_clients_logo6 from "../MainAssets/our-clients_logo6.svg"

export default function AuthorWordsSection() {
    return(
        <section className="author-words">
          <div className="author-words__inner container">
            <div className="author-portrait-container">
              <img src={author_portrait} alt="" />
            </div>
            <div className='author-words-body'>
              <p className='body2 medium'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h4 style={{color: "var(--primary)"}}>Tim Smith</h4>
              <p style={{color: "var(--neutral-l_grey)"}} className='body2 regular'>British Dragon Boat Racing Association</p>
              <ul className='our-clients-list'>
                <li className="our-clients-item">
                  <img src={our_clients_logo1} alt="logotype1" />
                </li>
                <li className="our-clients-item">
                  <img src={our_clients_logo2} alt="logotype2" />
                </li>
                <li className="our-clients-item">
                  <img src={our_clients_logo3} alt="logotype3" />
                </li>
                <li className="our-clients-item">
                  <img src={our_clients_logo4} alt="logotype4" />
                </li>
                <li className="our-clients-item">
                  <img src={our_clients_logo5} alt="logotype5" />
                </li>
                <li className="our-clients-item">
                  <img src={our_clients_logo6} alt="logotype6" />
                </li>
                <li>
                  <button style={{display: "inline-flex", gap: "8px"}} className="transparent">
                    <h4 style={{color: "var(--primary)"}}>Meet all customers</h4>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399" stroke="#4CAF4F" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
    )
}