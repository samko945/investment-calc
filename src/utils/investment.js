/*
This function expects an object as an argument with the following properties
- initialInvestment: The initial amount of the initialInvestment
- annualInvestment: The amount added/invested every year
- expectedReturn: The expected annual rate of return
- duration: the investment duration years
*/
export function calculateInvestment({ initialInvestment, annualInvestment, expectedReturn, duration }) {
	initialInvestment = parseFloat(initialInvestment);
	annualInvestment = parseFloat(annualInvestment);
	expectedReturn = parseFloat(expectedReturn);
	duration = parseInt(duration, 10);

	const annualData = [];

	let investmentValue = initialInvestment;
	for (let i = 0; i < duration; i++) {
		const interestEarnedInYear = investmentValue * (expectedReturn / 100);
		investmentValue += interestEarnedInYear + annualInvestment;
		annualData.push({
			year: i + 1,
			valueEndOfYear: investmentValue,
			interest: interestEarnedInYear,
			totalInterest: annualData.reduce((acc, curr) => acc + curr.interest, interestEarnedInYear),
			annualInvestment: initialInvestment + (i + 1) * annualInvestment,
		});
	}

	return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "£1,000"
export const formatter = new Intl.NumberFormat("en-GB", {
	style: "currency",
	currency: "GBP",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});
