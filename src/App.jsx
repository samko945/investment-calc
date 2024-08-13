import { useState } from "react";
import Header from "./components/Header";
import CalcParamsForm from "./components/CalcParamsForm";
import Result from "./components/Result";

function App() {
	const [calcParams, setCalcParams] = useState({
		initialInvestment: 10000,
		annualInvestment: 1500,
		expectedReturn: 5,
		duration: "",
	});
	function handleCalcParamsChange(e) {
		setCalcParams((prev) => ({ ...prev, [e.target.name]: +e.target.value }));
	}

	return (
		<>
			<Header />
			<CalcParamsForm data={calcParams} onDataChange={handleCalcParamsChange} />
			<Result input={calcParams} />
		</>
	);
}

export default App;
