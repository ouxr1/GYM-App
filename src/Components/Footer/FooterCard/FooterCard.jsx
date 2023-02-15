import './FooterCard.css'

const FooterCard = ({ cardHeading, children }) => {
    return (
        <div className="footerCard" >
            <h3>{cardHeading}</h3>
            {children}
        </div>
    )
}


export default FooterCard;