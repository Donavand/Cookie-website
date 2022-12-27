import React from "react";
import Layout from "../../common/Layout/Layout";
import "./Contact.css";
export default function Contact() {
	const [shakePhone, setShakePhone] = React.useState(false);

	return (
		<Layout>
			<div className="contact_layout box_shadow">
				<h1>Contact</h1>
				<i
					className={`fa-solid fa-phone fa-sm ${
						shakePhone ? "fa-shake" : ""
					}`}
				></i>
				<a
					href="tel:+1-267-978-5155"
					onMouseOver={() => {
						setShakePhone(true);
					}}
					onMouseLeave={() => {
						setShakePhone(false);
					}}
				>
					1-267-978-5155
				</a>
			</div>
		</Layout>
	);
}
