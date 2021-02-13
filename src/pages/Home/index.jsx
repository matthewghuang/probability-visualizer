import React from "react"
import { BlueLink } from "../../components/BlueLink"

export const Home = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-2xl">Probability Visualizer</h1>

			<div>
				<ul>
					<li>
						<BlueLink to="/coin-flip">Coin Flip</BlueLink>
					</li>
					<li>
						<BlueLink to="/dice-guesser">Dice Guesser</BlueLink>
					</li>
				</ul>
			</div>
		</div>
	)
}
