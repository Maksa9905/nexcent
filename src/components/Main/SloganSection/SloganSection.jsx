import "./SloganSection.css"

export default function SloganSection() {
    return(
        <section className='slogan'>
          <div className="slogan__inner container">
            <h1 style={{color: "var(--neutral-black)"}}>Pellentesque suscipit <br />
               fringilla libero eu.</h1>
               <button style={{display: "inline-flex", gap: "8px", alignItems: "center"}}>
                    <p className='body2 regular' style={{color: "var(--neutral-white)"}}>Get a Demo</p>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
          </div>
        </section>
    )
}