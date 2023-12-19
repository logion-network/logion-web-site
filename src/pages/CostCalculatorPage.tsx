import { Container } from "react-bootstrap";
import Calculator from "../components/calculator/Calculator";
import CalculatorContextProvider from "../components/calculator/CalculatorContext";
import "./CostCalculatorPage.css";

export default function CostCalculatorPage() {
    return (
        <div className="CostCalculatorPage">
            <Container>
                <h1>Cost Calculator</h1>

                <p>This tool can be used by requesters of Legal Officer Cases (LOCs)
                    to estimate their costs for the creation of the LOCs they need.</p>

                <p>Note that in order to request a Transaction or Collection LOC to a
                    Legal Officer, an Identity LOC is required. Do not forget to include
                    it in your estimation if you do not have one already.</p>

                <p>When adding a LOCs, default values are filled-in, <strong>do not forget to
                    adjust them to represent your real needs</strong>.</p>

                <CalculatorContextProvider>
                    <Calculator/>
                </CalculatorContextProvider>
            </Container>
        </div>
    );
}
