import logo from "../Image/logo.png"

function Header()
{
    return(
        <div className="Header">
            <div className="Logo">
                <i></i>
                <i></i>
                <i></i>
                <img src={logo} alt="" />
            </div>
            <div className="Tabs">
               <ul>
                <li><a href="">HOME </a></li>
                <li><a href="">ABOUT </a></li>
                <li><a href="">FEATURE </a></li>
                <li><a href="">SCREENSHOT </a></li>
                <li><a href="">TEAM </a></li>
                <li><a href="">BLOG </a></li>
                <li><a href="">CONTACT US </a></li>
               </ul>
            </div>

        </div>
    )
}

export default Header