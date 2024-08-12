import { useState } from "react";
import { calculateInvestment } from "./utils/investment";
import CalcParamsForm from "./components/CalcParamsForm";

function App() {
	const [calcParams, setCalcParams] = useState({
		initialInvestment: "",
		annualInvestment: "",
		expectedReturn: "",
		duration: "",
	});
	function handleCalcParamsChange(e) {
		setCalcParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}
	if (
		calcParams.initialInvestment &&
		calcParams.annualInvestment &&
		calcParams.expectedReturn &&
		calcParams.duration
	) {
		console.log(calculateInvestment(calcParams));
	}
	return (
		<>
			<h1>Investment Calculator</h1>
			<CalcParamsForm data={calcParams} onDataChange={handleCalcParamsChange} />
		</>
	);
}

export default App;
