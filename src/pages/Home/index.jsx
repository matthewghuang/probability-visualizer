import React from "react"
import { Link } from "react-router-dom"
import "../../styles/link.css"

export const Home = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-2xl">Probability Visualizer</h1>

			<Link to="/coin-flip" className="link">
				Coin Flip
			</Link>
		</div>
	)
}
