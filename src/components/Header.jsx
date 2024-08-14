import saplingImage from "../assets/sapling.png";

export default function Header() {
	return (
		<header className="flex-row">
			<img src={saplingImage} alt="sapling" />
			<h1>Investment Calculator</h1>
		</header>
	);
}
