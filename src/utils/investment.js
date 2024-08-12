/*
This function expects an object as an argument with the following properties
- initialInvestment: The initial amount of the initialInvestment
- annualInvestment: The amount added/invested every year
- expectedReturn: The expected annual rate of return
- duration: the investment duration years
*/
export function calculateInvestment({ initialInvestment, annualInvestment, expectedReturn, duration }) {
	const annualData = [];

	let investmentValue = Number(initialInvestment);
	for (let i = 0; i < Number(duration); i++) {
		const interestEarnedInYear = investmentValue * (Number(expectedReturn) / 100);
		investmentValue += interestEarnedInYear + Number(annualInvestment);
		annualData.push({
			year: i + 1,
			interest: interestEarnedInYear,
			valueEndOfYear: investmentValue,
			annualInvestment,
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
