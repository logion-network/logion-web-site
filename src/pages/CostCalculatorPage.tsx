import { Container } from "react-bootstrap";
import Calculator from "../components/calculator/Calculator";
import CalculatorContextProvider from "../components/calculator/CalculatorContext";
import "./CostCalculatorPage.css";

export default function CostCalculatorPage() {
    return (
        <div className="CostCalculatorPage">
            <Container>
                <h1>Cost Calculator</h1>

                <p>This tool can be used by future requesters of Legal Officer Cases (LOCs)
                    to estimate the cost of creating a set of LOCs.</p>

                <p>Note that in order to request a Transaction or Collection LOC to a
                    Legal Officer, an Identity LOC is required. Do not forget to include
                    it in your estimation if you do not have one already.</p>

                <CalculatorContextProvider>
                    <Calculator/>
                </CalculatorContextProvider>
            </Container>
        </div>
    );
}
