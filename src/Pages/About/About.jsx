import React from "react";
import Layout from "../../common/Layout/Layout";
import "./About.css";

export default function About() {
	return (
		<Layout>
			<div className="about_layout box_shadow">
				<h1 className="about_header">About The Company</h1>
				<p className="about_content">
					My Name is Christopher Bacon and I'm the owner of Bac N
					Cookies. I started out just making cookies with my
					daughter's around the holidays, then my youngest daughter
					said that they were really good so that you should spread
					gifts with others.
				</p>
			</div>
		</Layout>
	);
}
