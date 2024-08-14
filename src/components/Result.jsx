import { calculateInvestment } from "../utils/investment";
import TableData from "./TableData";

export default function Result({ input: calcParams }) {
	const missingParams = () => {
		const missing = [];
		const params = Object.entries(calcParams);
		for (const param of params) {
			if (param[1] === "" || param[1] === 0) {
				missing.push(param[0]);
			}
		}
		return missing;
	};

	const durationBadValue = calcParams.duration <= 0;
	const durationNoValue = calcParams.duration !== "";
	const invalidDuration = durationBadValue && durationNoValue;
	const invalidDurationMessage = <span>Duration must be greater than 0.</span>;

	if (missingParams().length > 0 || durationBadValue) {
		return (
			<section>
				<span>Fill in the form!</span>
				{invalidDuration && invalidDurationMessage}
			</section>
		);
	}

	const result = calculateInvestment(calcParams);

	return (
		<section>
			<table>
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (annual)</th>
						<th>Accumulated Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{result.map((row, index) => {
						return (
							<tr key={index}>
								<TableData value={row.year} />
								<TableData isCurrency={true} value={row.valueEndOfYear} />
								<TableData isCurrency={true} value={row.interest} />
								<TableData isCurrency={true} value={row.totalInterest} />
								<TableData isCurrency={true} value={row.annualInvestment} />
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}
