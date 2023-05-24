import { CookieConsentProvider } from '@use-cookie-consent/react'
import Header from './Header';
import { CONTENT, FOOTER_LEGAL, FOOTER_SUMMARY, GA_ID } from '../Content';
import Footer from './Footer';
import "./App.css";
import CookieConsent from './CookieConsent';

export default function App() {
    return (
        <CookieConsentProvider>
            <div className="App">
                <Header/>
                <div className="content">
                    { CONTENT }
                </div>
                <Footer
                    summary={ FOOTER_SUMMARY }
                    legal={ FOOTER_LEGAL }
                />
                <CookieConsent
                    googleId={ GA_ID }
                />
            </div>
        </CookieConsentProvider>
  );
}
