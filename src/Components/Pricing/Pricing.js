import './Pricing.css'
import Container from "../Global/Container";
import Heading from "../Global/Heading/Heading";
import PricingCard from "./PricingCard/PricingCard";

const Pricing = () => {

    return (
        <section className="pricing"  >
            <Container>
                <Heading title="OUR PRICING" info="There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration." />
                <div className="wrapper">
                    <PricingCard cardTitle="BEGINNER" cardPricing="$45/m" />
                    <PricingCard cardTitle="EXPERT" cardPricing="$45/m" />
                    <PricingCard cardTitle="PRO" cardPricing="$45/m" />
                </div>
            </Container>
        </section>
    )
}

export default Pricing;
// import React from 'react';
// import './Pricing.css';

// const Pricing = () => {
//   return (
//     <div className="pricing-container">
//       <h2 className="pricing-header">Membership Options</h2>
//       <div className="pricing-options">
//         <div className="pricing-option">
//           <h3 className="pricing-option-name">Basic</h3>
//           <p className="pricing-option-price">$29/month</p>
//           <ul className="pricing-option-features">
//             <li>Access to all gym facilities</li>
//             <li>Unlimited group fitness classes</li>
//             <li>10% discount on personal training sessions</li>
//           </ul>
//           <button className="pricing-option-button">Sign Up</button>
//         </div>
//         <div className="pricing-option">
//           <h3 className="pricing-option-name">Premium</h3>
//           <p className="pricing-option-price"><span>$49</span>/month</p>
//           <ul className="pricing-option-features">
//             <li>Access to all gym facilities</li>
//             <li>Unlimited group fitness classes</li>
//             <li>20% discount on personal training sessions</li>
//             <li>Free nutrition counseling sessions</li>
//           </ul>
//           <button className="pricing-option-button">Sign Up</button>
//         </div>
//         <div className="pricing-option">
//           <h3 className="pricing-option-name">Platinum</h3>
//           <p className="pricing-option-price">$69/month</p>
//           <ul className="pricing-option-features">
//             <li>Access to all gym facilities,</li>
//             <li>Unlimited group fitness classes,</li>
//             <li>30% discount on personal training sessions,</li>
//             <li>Free nutrition counseling sessions,</li>
//             <li>Priority reservation privileges for gym equipment</li>
//           </ul>
//           <button className="pricing-option-button">Sign Up</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;
