import { useState } from "react";
import CalcParamsForm from "./components/CalcParamsForm";
import Result from "./components/Result";

function App() {
	const [calcParams, setCalcParams] = useState({
		initialInvestment: "1000",
		annualInvestment: "100",
		expectedReturn: "5",
		duration: "",
	});
	function handleCalcParamsChange(e) {
		setCalcParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	return (
		<>
			<h1>Investment Calculator</h1>
			<CalcParamsForm data={calcParams} onDataChange={handleCalcParamsChange} />
			<Result input={calcParams} />
		</>
	);
}

export default App;
