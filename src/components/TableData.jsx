export default function TableData({ children, isCurrency }) {
	if (typeof children !== "string" && typeof children !== "number") {
		throw Error("TableData child must be string or number.");
	}

	return <td>{children}</td>;
}
