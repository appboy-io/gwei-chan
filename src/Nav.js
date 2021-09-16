import './styles/Nav.css';
import Button from '@material-ui/core/Button';

function Nav() {
    return (
        <div className="Nav">
            <nav className="Nav-main">
                <div className="Nav-home-link">
                    <a href="/">
                        <Button variant="primary" className="Nav-button">Home</Button>
                    </a>
                </div>
                <div className="Nav-links">
                    <a className="Nav-link" href="/">
                        <Button variant="primary" className="Nav-button">Donate</Button>
                    </a>
                    <a className="Nav-link" href="/">
                        <Button variant="primary" className="Nav-button">About</Button>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
