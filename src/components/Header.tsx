import { Container } from 'react-bootstrap';
import Logo from './Logo';
import "./Header.css";
import Social from './Social';

export default function Header() {
    return (
        <Container className="Header">
            <div className="logo-menu-container">
                <Logo/>
                <Social/>
            </div>
        </Container>
    );
}
