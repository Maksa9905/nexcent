import "./StatsSection.css"


export default function StatsSection() {
    return(
        <section className="stats">
          <div className='stats__inner container'>
            <div className='stats-description'>
              <h2>
                Helping a local <br /> 
                <span style={{color: "var(--primary)"}}>business reinvent itself</span>
              </h2>
              <p style={{color: "var(--neutral-dark)"}} className='body2 regular'>We reached here with our hard work and dedication</p>
            </div>
            <ul className='stats-data-list'>
              <li className='stats-data-item members'>
                <div>
                  <h2>2,245,341</h2>
                  <p>Members</p>
                </div>
              </li>
              <li className='stats-data-item clubs'>
                <div>
                  <h2>46,328</h2>
                  <p>Clubs</p>
                </div>
              </li>
              <li className='stats-data-item event-bookings'>
                <div>
                  <h2>828,867</h2>
                  <p>Event Bookings</p>
                </div>
              </li>
              <li className='stats-data-item payments'>
                <div>
                  <h2>1,926,436</h2>
                  <p>Payments</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
    )
}
