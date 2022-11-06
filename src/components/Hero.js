import { useState, useEffect } from "react";
import axios from "axios";
import logo from '../thetuliplogo.svg'
import './hero.css'
import { IoTimer } from "react-icons/io5";


const Hero = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [hero, setHero] = useState();

    const [logoName] = useState("IoTimer")
    
    useEffect(() => {
        axios("http://localhost:4000/hero")
            .then(response => setHero(response.data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false))
    }, []);

    return ( 
        <div className="hero">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!error && hero && (
                <>
                    <img className="hero__background" src={hero.image} alt="" />
                    <div className="hero__wrapper">
                        <img className="hero__logo" src={logo} alt="The Tulip Hotel" />
                        <h1>{hero.headline}</h1>

                        <p>Here is a an icon: {`<${logoName} />`}</p>
                        
                    </div>
                </>
            )}
        </div>
     );
}
 
export default Hero;