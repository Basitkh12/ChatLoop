import img1 from "../Image/white-line.png"
import img2 from "../Image/feature-mob.png"
import Bullets , {Bullets2} from "../Bullets"

function Features()
{
    return(
        <div className="Features">
            <div className="firs-div">
                <h1>Chat Loop Feature</h1>
                <img src={img1} alt="" />
            </div>
            <div className="second-div">
                <div className="list">
                    <ul>
                        {Bullets.map(t=>{
                            return(
                                <li className="feas">
                                    <h4>{t.h1}</h4>
                                    <p>{t.p}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="effect">
                    <i></i>
                    <i></i>
                    <i></i>
                <img src={img2} alt="" />
                </div>
                <div className="list2">
                    <ul>
                        {Bullets2.map(t=>{
                            return(
                                <li className="feas">
                                    <h4>{t.h1}</h4>
                                    <p>{t.p}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Features