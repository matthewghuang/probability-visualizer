import React, { useState } from "react"
import { BlueLink } from "../../components/BlueLink"
import styled from "styled-components"

const Coin = styled.div.attrs({
	className:
		"flex bg-yellow-800 w-24 h-24 rounded-full justify-center items-center text-3xl text-white select-none"
})``

const theoretical_probability = n => {
	return (1 * 2) / 2 ** n
}

export const CoinGuesser = () => {
	const [coins, setCoins] = useState([])
	const [trials, setTrials] = useState([])

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

	return (
		<div className="container mx-auto space-y-3">
			<div>
				<h1 className="text-2xl">Coin Guesser</h1>
				<BlueLink to="/">Home</BlueLink>
			</div>

			<div>
				<label htmlFor="number-of-coins">Number of Coins: </label>
				<input
					type="number"
					name="number-of-coins"
					onInput={on_number_of_coins_input}
					min="0"
					max="10"
					className="p-1 bg-blue-400 rounded-lg"
				/>
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
				<span className="font-mono">
					{theoretical_probability(coins.length) * 100}%
				</span>
				<br />
				Experimental Probablity ({trials.length} trials):{" "}
				<span className="font-mono"></span>
			</div>
		</div>
	)
}
