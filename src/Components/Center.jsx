import React from "react";
import "./Center.css";
function Center(props) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			{props.children}
		</div>
	);
}
export default Center;
