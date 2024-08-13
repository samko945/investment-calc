import { calculateInvestment } from "../utils/investment";
import TableData from "./TableData";

export default function Result({ input: calcParams }) {
	const inputReceived = Object.entries(calcParams);
	// check if there is a missing value for any param
	const hasMissingParam = inputReceived.some((param) => {
		// param[0] is param key, param[1] is param value
		return !param[1];
	});

	if (hasMissingParam) {
		return <section>Fill in the form!</section>;
	}

	const headings = {
		year: "Year",
		interest: "Interest (annual)",
		valueEndOfYear: "Investment Value",
		annualInvestment: "Invested Capital",
		totalInterest: "Accumulated Interest",
	};

	const result = calculateInvestment(calcParams);
	const resultKeys = Object.keys(result[0]);
	const rowHeadings = resultKeys.map((key) => <th key={key}>{headings[key]}</th>);

	return (
		<section>
			<table>
				<thead>
					<tr>{rowHeadings}</tr>
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
