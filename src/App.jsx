import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { CoinFlip } from "./pages/CoinFlip"
import { DiceGuesser } from "./pages/DiceGuesser"

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/coin-flip">
					<CoinFlip></CoinFlip>
				</Route>
				<Route path="/dice-guesser">
					<DiceGuesser></DiceGuesser>
				</Route>
				<Route path="/">
					<Home></Home>
				</Route>
			</Switch>
		</Router>
	)
}
