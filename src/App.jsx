import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { CoinFlip } from "./pages/CoinFlip"

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/coin-flip">
					<CoinFlip></CoinFlip>
				</Route>
				<Route path="/">
					<Home></Home>
				</Route>
			</Switch>
		</Router>
	)
}
