import './styles/Main.css';
import character from './main.png';
import { useState, useEffect, useRef } from 'react';

function Main() {
    const [gweiCount, setGwei] = useState(0);
    const ws = useRef(null);

    useEffect(() => { 
        console.log('Component mounted');
        ws.current = new WebSocket('wss://gwie-chan-api.herokuapp.com/');
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onmessage = e => {
            let wsData = JSON.parse(e.data);
            let { unconfirmed_count } = wsData;
            setGwei(unconfirmed_count);
        }

        return () =>  {
            ws.current.close();
        };
    }, []);

    return(
        <div>
            <div className="Main-body">
                <div className="Main-talk-bubble tri-right round talk-bubble-border right-top">
                    <div className="talk-text">
                        <p>Gwei updates occur every 55 seconds</p>
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