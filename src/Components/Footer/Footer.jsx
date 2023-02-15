import Container from "../Global/Container";
import FooterCard from "./FooterCard/FooterCard";
import Button from "../Global/Button/Button";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <Container>
                <FooterCard cardHeading="Gym">
                    <div className="firstCard">
                        <p>DB Sebta,Mohammadia,Casablanca MOROCCO</p>
                        <a href="">+212708159822</a>
                        <a href="">oussamaabd57@gmail.com</a>
                        <div className="social">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-pinterest-p"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Useful Links">
                    <div className="usefulLinks">
                        <Link to='/pricing'>Pricing</Link>
                        <Link>About</Link>
                        <Link>Testimoials  </Link>
                        <Link>Contact</Link>
                    </div>
                </FooterCard>
                <FooterCard cardHeading="Subscribe">
                    <div className="subscribe">
                        <div className="input">
                            <input type="text" placeholder="Enter your Email" />
                            <Button />
                        </div>
                        <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                    </div>
                </FooterCard>
            </Container>
            <div className="copyright">
                <p>Copyright ©2022 All rights reserved | This template is made with <i class="far fa-heart"></i> oussamaabd57</p>
            </div>
        </footer>
    )
}

export default Footer;