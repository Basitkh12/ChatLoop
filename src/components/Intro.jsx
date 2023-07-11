import app1 from "../Image/app1.png"
import app2 from "../Image/app2.png"
import img1 from "../Image/top-mobile.png"
import img2 from "../Image/top1.png"
import img3 from "../Image/top2.png"
import img4 from "../Image/top3.png"
import img5 from "../Image/top4.png"
import img6 from "../Image/top5.png"

function Intro()
{
    return(
        <div className="intro">
            <div className="first-div">
                <h1>The best way to connect with your friend is with</h1>
                <h2>ChatLoop!</h2>
                <p>Connecting the world, one chat at a time</p>
                <div className="buttons">
                   <a href=""> <img src={app1} alt="" /></a>
                   <a href=""> <img src={app2} alt="" /></a>
                </div>
            </div>

            <div className="Second-div">
            <img className="mble" src={img1} alt="" />
            <div className="p1">
            <img  src={img2} alt="" />
            </div>
            <div className="p2">
            <img  src={img3} alt="" />
            </div>
            <div className="p3">
            <img  src={img4} alt="" />
            </div>
            <div className="p4" >
            <img src={img5} alt="" />
            </div>
            <img className="p5" src={img6} alt="" />
            </div>
        </div>
    )
    
}

export default Intro