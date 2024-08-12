import Input from "./Input";

export default function CalcParamsForm({ data, onDataChange }) {
	return (
		<form>
			<Input name="initialInvestment" value={data.initialInvestment} onChange={onDataChange} type="number">
				Initial Investment
			</Input>
			<Input name="annualInvestment" value={data.annualInvestment} onChange={onDataChange} type="number">
				Annual Investment
			</Input>
			<Input name="expectedReturn" value={data.expectedReturn} onChange={onDataChange} type="number">
				Expected Return %
			</Input>
			<Input name="duration" value={data.duration} onChange={onDataChange} type="number">
				Duration
			</Input>
		</form>
	);
}
