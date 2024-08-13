import { useState } from "react";
import saplingImage from "../assets/sapling.png";
import CalcParamsForm from "./components/CalcParamsForm";
import Result from "./components/Result";

function App() {
	const [calcParams, setCalcParams] = useState({
		initialInvestment: "15000",
		annualInvestment: "1200",
		expectedReturn: "6",
		duration: "",
	});
	function handleCalcParamsChange(e) {
		setCalcParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}

	return (
		<>
			<img src={saplingImage} alt="sapling" />
			<h1>Investment Calculator</h1>
			<CalcParamsForm data={calcParams} onDataChange={handleCalcParamsChange} />
			<Result input={calcParams} />
		</>
	);
}

export default App;
