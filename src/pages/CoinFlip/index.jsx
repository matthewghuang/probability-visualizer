import React, { useState } from "react"
import styled from "styled-components"

const Coin = styled.div.attrs({
	className:
		"flex bg-yellow-800 w-24 h-24 rounded-full justify-center items-center text-3xl text-white"
})``
const Button = styled.button.attrs({
	className: "bg-red-300 rounded-lg p-2"
})``

const roll_coin = () => (Math.round(Math.random()) ? "H" : "T")

const get_reverse = arr => arr.reduceRight((accum, v) => accum.concat(v), [])

export const CoinFlip = () => {
	const [coins, setCoins] = useState([roll_coin()])

	const add_coin = () => setCoins([...coins, roll_coin()])

	const add_n_coins = n => {
		const new_coins = [...Array(n)].map(roll_coin)
		setCoins([...coins, ...new_coins])
	}

	const reset = () => setCoins([roll_coin()])

	return (
		<div className="container mx-auto space-y-3">
			<h1 className="text-2xl">Coin Flip</h1>

			<div className="space-x-1">
				<Button onClick={add_coin}>Flip a coin</Button>
				<Button onClick={() => add_n_coins(100)}>Flip 100 coins</Button>
				<Button onClick={reset}>Reset</Button>
			</div>

			<div>You've flipped {coins.length} coins!</div>

			<div className="flex space-x-1">
				{get_reverse(coins)
					.slice(0, 15)
					.map((r, i) => (
						<Coin className="flex-none" style={{ opacity: (15 - i) / 15 }}>
							{r}
						</Coin>
					))}
			</div>

			<div className="grid grid-cols-2 gap-5">
				<div className="font-mono">
					The distribution of coins is:
					<br />
					H: {(coins.filter(r => r == "H").length / coins.length) * 100}%
					<br></br>
					T: {(coins.filter(r => r == "T").length / coins.length) * 100}%
				</div>
			</div>
		</div>
	)
}
