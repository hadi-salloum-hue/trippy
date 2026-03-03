import './Hero.css'

const Hero = ({bgImage,title,description,btn}) => {
    return (
        <div className="hero" style={{ backgroundImage:`url(${bgImage})` }}>
            <h1>{title}</h1>
            {description&&<p>{description}</p>}
            {btn&&<button>{btn}</button>}
        </div>
    )
}

export default Hero
