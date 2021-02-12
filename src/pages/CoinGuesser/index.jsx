import React, { useState } from "react"
import { BlueLink } from "../../components/BlueLink"
import styled from "styled-components"

const Coin = styled.div.attrs({
	className:
		"flex bg-yellow-800 w-24 h-24 rounded-full justify-center items-center text-3xl text-white select-none"
})``
const Button = styled.button.attrs({
	className: "p-1 rounded-lg bg-blue-400"
})``

export const CoinGuesser = () => {
	const [coins, _setCoins] = useState([])
	const [trials, setTrials] = useState([])

	const setCoins = arr => {
		setTrials([])
		_setCoins(arr)
	}

	const on_number_of_coins_input = event =>
		setCoins(Array(Number(event.target.value)).fill("?"))

	const get_next_symbol = cur => {
		switch (cur) {
			case "?":
				return "H"
			case "H":
				return "T"
			case "T":
				return "?"
		}
	}

	const on_coin_click = idx => {
		const cur_wanted = coins[idx]

		setCoins([
			...coins.slice(0, idx),
			get_next_symbol(cur_wanted),
			...coins.slice(idx + 1)
		])
	}

	const generate_random_coin = () => (Math.round(Math.random()) ? "H" : "T")

	const add_trial = () => {
		const trial = [...Array(coins.length)].map(generate_random_coin)

		setTrials([...trials, trial])
	}

	const add_hundred_trials = () => {
		const new_trials = [...Array(100)].map(() =>
			[...Array(coins.length)].map(generate_random_coin)
		)
		setTrials([...trials, ...new_trials])
	}
	const theoretical_probability = () =>
		(1 / 2) ** coins.filter(c => c == "H" || c == "T").length

	const experimental_probability = () => {
		const matches = trials.map(trial =>
			trial.every((t, i) => t == coins[i] || coins[i] == "?")
		)

		return matches.filter(m => m == true).length / trials.length
	}

	return (
		<div className="container mx-auto space-y-3">
			<div>
				<h1 className="text-2xl">Coin Guesser</h1>
				<BlueLink to="/">Home</BlueLink>
			</div>

			<div className="space-y-1">
				<fieldset>
					<label htmlFor="number-of-coins">Number of Coins: </label>
					<input
						type="number"
						name="number-of-coins"
						onInput={on_number_of_coins_input}
						min="0"
						max="10"
						className="p-1 bg-blue-400 rounded-lg"
					/>
				</fieldset>
				<fieldset className="space-x-1">
					<Button onClick={add_trial}>Test</Button>
					<Button onClick={add_hundred_trials}>Test 100</Button>
					<Button onClick={() => setTrials([])}>Reset Tests</Button>
				</fieldset>
			</div>

			<div className="flex space-x-1">
				{coins.map((wanted, idx) => (
					<Coin key={idx} onClick={() => on_coin_click(idx)}>
						{wanted}
					</Coin>
				))}
			</div>

			<div>
				Theoretical Probability:{" "}
				<span className="font-mono">{theoretical_probability() * 100}%</span>
				<br />
				Experimental Probablity ({trials.length} trials):{" "}
				<span className="font-mono">
					{experimental_probability() * 100 || 0}%
				</span>
			</div>
		</div>
	)
}
