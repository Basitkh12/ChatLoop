import img1 from "../Image/footer-logo.png"
import img2 from "../Image/app1.png"
import img3 from "../Image/app2.png"


import Slider from "react-slick";


function Screenshot()
{
    
    return(

    <div className="Screenshot">
        <div className="first-div">
            <img src={img1} alt="" />
            <h2>Download Chatloop and Enjoy</h2>
            <div className="buttons">
                <img src= {img2} alt="" />
                <img src= {img3} alt="" />
            </div>
        </div>
    </div>
    )
}
export default Screenshot