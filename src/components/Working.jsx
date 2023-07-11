import img1 from "../Image/title-line 2.png"
import Cards from "../Cards"
function Working()
{

    return(
        <div className="Working">
            <div className="First-div">
                <h1>How chatloop Work</h1>
                <img src={img1} alt="" />
                <p>ChatLoop is an intelligent conversational agent powered by AI, designed to engage in meaningful and dynamic conversations
                    with users, providing accurate and helpful responses.</p>
            </div>

            <div className="Second-div">
                {Cards.map(t=>{
                    return(
                    <div className="Cardss">
                        <img src={t.img} alt="" />
                        <h1>{t.h1}</h1>
                        <p>{t.p}</p>
                        <img className="img2" src={t.img2} alt="" />
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Working