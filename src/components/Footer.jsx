import { AiFillInstagram,AiOutlineTwitter } from "react-icons/ai";

function Footer() {
    return ( 
        <div className="footer-container">
            <p>2023 Beats Headphones All rights reserverd</p>
            <p className="icons" >
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>
     );
}

export default Footer;