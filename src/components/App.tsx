import Footer from './Footer';
import Header from './Header';
import { CONTENT, FOOTER_TEXT, FOOTER_TITLE } from '../Content';

export default function App() {
    return (
        <div className="App">
            <Header/>
            { CONTENT }
            <Footer
                title={ FOOTER_TITLE }
                text={ FOOTER_TEXT }
            />
        </div>
  );
}
