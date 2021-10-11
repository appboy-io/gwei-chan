import './styles/Main.css';
import character from './main.png';
import { useState, useEffect, useRef } from 'react';

function Main() {
    const [lowGweiCount, setLowGwei] = useState(0);
    const [mediumGweiCount, setMediumGwei] = useState(0);
    const [highGweiCount, setHighGwei] = useState(0);
    const ws = useRef(null);

    useEffect(() => { 
        console.log('Component mounted');
        ws.current = new WebSocket('wss://gwie-chan-api.herokuapp.com/');
        ws.current.onopen = () => console.log("ws opened");
        ws.current.onmessage = e => {
            let wsData = JSON.parse(e.data);
            console.log("Data:", JSON.stringify(wsData));
            let { low, medium, high } = wsData;
            setLowGwei(low);
            setMediumGwei(medium);
            setHighGwei(high);
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
                <div className="Main-gwei-count-container">
                    <p className="Main-gwei-count">
                        Low Gas Count: {lowGweiCount} GWEI
                    </p>
                    <p className="Main-gwei-count">
                        Medium Gas Count: {mediumGweiCount} GWEI
                    </p>
                    <p className="Main-gwei-count">
                        High Gas Count: {highGweiCount} GWEI
                    </p>
                </div>
            </div>  
        </div>
    );
}

export default Main;