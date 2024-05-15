import { useForm } from "react-hook-form"
import "./LoginModalWindow.css"
import logo from "./ModalWindowAssets/Logo.svg"
import google_icon from "./ModalWindowAssets/google_icon.svg"


export default function LoginModalWindow() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);

    return(
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <img src={logo} alt="" />
            <h2>Welcome back!</h2>
            <div className="login-form-inputs">
                <input className="login-input" placeholder="Your Email" type="email" {...register("Email")} />
                <input className="login-input" placeholder="Your Password" type="password" {...register("Password")} />
            </div>
            <button type="submit">Login now</button>
            <button style={{display: "flex", alignItems: "center", gap: "10px", justifyContent:"center"}} type="button" className="transparent" onClick={() => {console.log("Google login")}}>Continue with Google <img style={{height: "80%"}} src={google_icon} alt="" /></button>
            <p>Don't have accotunt ? <a style={{color: "var(--primary)", fontWeight: 600, letterSpacing: "0.6px"}}>Sign Up Now</a></p>
        </form>
    )
}