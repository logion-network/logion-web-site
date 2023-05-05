import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Logo from './Logo';
import "./Header.css";
import Social from './Social';

export default function Header() {
    const [ scroll, setScroll ] = useState<number>(window.scrollY);

    useEffect(() => {
        const listener = () => setScroll(window.scrollY);
        window.addEventListener("scroll", listener);
        return () => window.removeEventListener("scroll", listener);
    }, []);

    return (
        <div className={`Header${ scroll > 0 ? " scroll" : "" }`}>
            <Container>
                <div className="logo-menu-container">
                    <Logo smaller={ scroll > 0 }/>
                    <Social smaller={ scroll > 0 }/>
                </div>
            </Container>
        </div>
    );
}
