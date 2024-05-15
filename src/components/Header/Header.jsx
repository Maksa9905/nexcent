import "./Header.css"
import logo from "./HeaderAssets/Logo.svg"

export default function Header({changeModalWindowState}) {
    return (
      <header className="header">
        <div className='header__inner container'>
          <img src={logo} alt="Nexcent logotype" className="header-logo" />
          <nav className="header-nav">
            <a className="body2 regular is-active" href="#">Home</a>
            <a className="body2 regular" href="#">Service</a>
            <a className="body2 regular" href="#">Feature</a>
            <a className="body2 regular" href="#">Product</a>
            <a className="body2 regular" href="#">Testimonial</a>
            <a className="body2 regular" href="#">FAQ</a>
          </nav>
          <div className='header-actions'>
            <button onClick={(event) => changeModalWindowState(event.target.id)} id='login' className="transparent">Login</button>
            <button onClick={(event) => changeModalWindowState(event.target.id)} id='register'>Sign up</button>
          </div>
        </div>
      </header>
    )
}