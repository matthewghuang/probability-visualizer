import React from "react"
import { BlueLink } from "../../components/BlueLink"

export const Home = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-2xl">Probability Visualizer</h1>

			<div>
				<span className="text-lg font-bold">Coins</span>
				<ul>
					<li>
						<BlueLink to="/coin-flip">Coin Flip</BlueLink>
					</li>
					<li>
						<BlueLink to="/coin-guesser">Coin Guesser</BlueLink>
					</li>
				</ul>
			</div>
		</div>
	)
}
