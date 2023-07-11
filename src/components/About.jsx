import about from "../about"
import title from "../Image/title-line.png"
import banner from "../Image/banner.png"


function About()
{
    return (
        <div className="About">
            <div className="first-div">
            <h1>About Chat Loop</h1>
            <img src={title} alt="" />
            </div>
            <div className="second-div">
                {about.map(t=>{
                    return(
                        <div className="Divs">
                            <img src={t.img} alt="" />
                            <h1>{t.head}</h1>
                        </div>
                    )
                })}
            </div>
            <div className="third-div">
                <h1>Connect with People all over the world , with your small device</h1>
                <img src={banner} alt="" />

            </div>
        </div>
    )
}

export default About