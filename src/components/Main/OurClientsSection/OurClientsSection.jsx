import "./OurClientsSection.css"

import our_clients_logo1 from "../MainAssets/our-clients_logo1.svg"
import our_clients_logo2 from "../MainAssets/our-clients_logo2.svg"
import our_clients_logo3 from "../MainAssets/our-clients_logo3.svg"
import our_clients_logo4 from "../MainAssets/our-clients_logo4.svg"
import our_clients_logo5 from "../MainAssets/our-clients_logo5.svg"
import our_clients_logo6 from "../MainAssets/our-clients_logo6.svg"
import our_clients_logo7 from "../MainAssets/our-clients_logo7.svg"

export default function OurClientsSection() {
    return (
        <section className='our-clients'>
          <div className="our-clients__inner container">
            <h2 className='our-clients-title'>Our Clients</h2>
            <p className='our-clients-paragraph regular body2'>We have been working with some Fortune 500+ clients</p>
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
              <li className="our-clients-item">
                <img src={our_clients_logo7} alt="logotype7" />
              </li>
          </ul>
          </div>
        </section>
    )
}