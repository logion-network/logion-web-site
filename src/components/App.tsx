import { CookieConsentProvider } from '@use-cookie-consent/react'
import Header from './Header';
import { FOOTER_LEGAL, FOOTER_SUMMARY, GA_ID } from '../Content';
import Footer from './Footer';
import "./App.css";
import CookieConsent from './CookieConsent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CostCalculatorPage from '../pages/CostCalculatorPage';
import Home from '../pages/HomePage';

export default function App() {
    return (
        <CookieConsentProvider>
            <div className="App">
                <Header/>
                <div className="content">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/cost-calculator" element={ <CostCalculatorPage /> } />
                            <Route path="/" element={ <Home /> } />
                        </Routes>
                    </BrowserRouter>
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
