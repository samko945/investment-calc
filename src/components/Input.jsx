export default function Input({ children, ...props }) {
	if (typeof children !== "string") {
		throw Error("Input's child must be a string.");
	}
	const id = children.split(" ").join("");
	return (
		<div>
			<label htmlFor={id}>{children}</label>
			<input id={id} name={id} {...props} />
		</div>
	);
}
