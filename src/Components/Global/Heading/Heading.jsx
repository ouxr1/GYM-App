import './Heading.css'

const Heading = ({ title, info }) => {
    return (
        <div className="heading" >
            <h2>{title}</h2>
            <p>{info}</p>
        </div>
    )
}


export default Heading;

