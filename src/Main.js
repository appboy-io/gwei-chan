import './styles/Main.css';
import character from './main.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Main() {
    const [gweiCount, setGwei] = useState(0);

    useEffect(() => { 
        console.log('Component mounted')
        const timer = setInterval(async () => {
            const { data } = await axios.get("https://random-data-api.com/api/app/random_app");
            setGwei(data.id);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div>
            <div className="Main-body">
                <div className="Main-talk-bubble tri-right round talk-bubble-border right-top">
                    <div className="talk-text">
                        <p>Gwei updates occur every 60 seconds</p>
                    </div>
                </div>
                <img src={character} className="Main-logo" alt="logo" />
                <p className="Main-gwei-count">
                    Gas Count: {gweiCount} GWEI
                </p>
            </div>  
        </div>
    );
}

export default Main;