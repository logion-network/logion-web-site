import Header from './Header';
import { CONTENT, FOOTER_LEGAL, FOOTER_SUMMARY } from '../Content';
import Footer from './Footer';
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                { CONTENT }
            </div>
            <Footer
                summary={ FOOTER_SUMMARY }
                legal={ FOOTER_LEGAL }
            />
        </div>
  );
}
