import { useCookieConsentContext } from '@use-cookie-consent/react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./CookieConsent.css";
import { useCallback } from 'react';

export interface Props {
    googleId: string;
}

export default function CookieConsent(props: Props) {
    const { consent, acceptAllCookies } = useCookieConsentContext();

    const loadGoogleAnalytics = useCallback(() => {
        const loaded = document.getElementById("ga-loader");
        if(!loaded) {
            const loader = document.createElement('script');
            loader.id = "ga-loader";
            loader.src = `https://www.googletagmanager.com/gtag/js?id=${ props.googleId }`;
            loader.async = true;
            document.body.appendChild(loader);

            const init = document.createElement('script');
            init.id = "ga-init";
            init.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ props.googleId }');`
            document.body.appendChild(init);
        }
    }, [ props.googleId ]);

    const agree = useCallback(() => {
        acceptAllCookies();
        loadGoogleAnalytics();
    }, [ acceptAllCookies, loadGoogleAnalytics ]);

    if(consent.thirdParty) {
        loadGoogleAnalytics();
        return null;
    } else {
        return (
            <div className="CookieConsent">
                <Container>
                    <Row>
                        <Col md={8}>
                            <p>By using this website, you agree to our use of cookies. This website collects anonymous data
                                using Google services to provide browsing statistics and analytics.</p>
                        </Col>
                        <Col md={4} className="button-container">
                            <Button
                                variant="outline-light"
                                onClick={ agree }
                            >
                                I understand and agree to this usage
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
