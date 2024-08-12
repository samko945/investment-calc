export default function Input({ children, name, ...props }) {
	return (
		<div>
			<label htmlFor={name}>{children}</label>
			<input id={name} name={name} {...props} />
		</div>
	);
}
