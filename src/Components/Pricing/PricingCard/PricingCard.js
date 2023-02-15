
import Button from "../../Global/Button/Button";
import './PiricingCard.css'
import { useNavigate } from 'react-router-dom';

const PricingCard = ({ cardTitle, cardPricing }) => {
    
    const navigate=useNavigate()
    return (
        <div className="pricingCard">
            <div className="pricingTitle">
                <h3>{cardTitle}</h3>
                <h5>{cardPricing}</h5>
            </div>
            <div className="pricingInfo">
                <span>24h unlimited access</span><br/>
                <span>Trainer Advice</span><br/>
            </div>
            <div className="infoGrey">
                <span>Locker + Bathroom</span><br/>
                <span>Personal trainer</span><br/>
            </div>
            
            <div  onClick={()=>navigate('signUp')}>
            <Button/>
            </div>
            
        </div>
    )
}



export default PricingCard;