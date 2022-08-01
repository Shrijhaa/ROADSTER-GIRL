import "./Home.css";
import Logo from "../images/logo.png";


function Home(){
    return(
        <div id="home"  className="fullContainer">
             <div className="logo">
                <img src={Logo} alt="logo" />
                
             </div>
             <div className="navbar">
                <a className="navlink" href="#home">Home</a>
                <a className="navlink" href="#about">About</a>
                <a className="navlink" href="#rally">Rally</a>
                <a className="navlink" href="#register">Register</a>
                <a className="navlink" href="#logout">Logout</a>

             </div>
        </div>

    );
}

export default Home;