import Input from "./components/Input";

function App() {
	return (
		<>
			<h1>Investment Calculator</h1>
			<form>
				<Input type="number">Initial Investment</Input>
				<Input type="number">Annual Investment</Input>
				<Input type="number">Expected Return %</Input>
				<Input type="number">Duration</Input>
			</form>
		</>
	);
}

export default App;
