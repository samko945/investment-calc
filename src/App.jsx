import { useState } from "react";

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
	console.log(calcParams);
	return (
		<>
			<h1>Investment Calculator</h1>
			<CalcParamsForm data={calcParams} onDataChange={handleCalcParamsChange} />
		</>
	);
}

export default App;
