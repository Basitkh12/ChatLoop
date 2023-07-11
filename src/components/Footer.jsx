function Footer()
{
return(
    <div className="Footer">
        <div className="elements">
        <div className="First-div">
            <h1>Get In Touch</h1>
            <input type="text" placeholder="User name" />
            <input type="Email" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button>Send Message</button>
        </div>
        <div className="Second-div">
            <h1>Contact Info</h1>
            <p>Reach Us Out On</p>
            <div className="Loc">
                <h2>Location</h2>
                <p>123 Business Avenue, Hoston, USA</p>
            </div>
            <div className="Loc">
                <h2>Call Us</h2>
                <p>+91 123-456-7890</p>
            </div>
            <div className="Loc">
                <h2>Email Us</h2>
                <p>support@gmail.com</p>
            </div>
        </div>
    </div>
    </div>
)
}

export default Footer