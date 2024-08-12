import { formatter } from "../utils/investment";

export default function TableData({ value, isCurrency }) {
	if (isCurrency) {
		value = formatter.format(value);
	}
	return <td>{value}</td>;
}
