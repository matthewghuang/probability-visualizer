import React, { useState } from "react"
import { BlueLink } from "../../components/BlueLink"
import styled from "styled-components"

const Dice = styled.div.attrs({
	className:
		"flex bg-gray-300 w-24 h-24 rounded-lg justify-center items-center text-3xl select-none"
})``
const Button = styled.button.attrs({
	className: "p-1 rounded-lg bg-blue-400"
})``

const random_number_inc = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min

export const DiceGuesser = () => {
	const [dice, _setDice] = useState([])
	const [trials, setTrials] = useState([])

	const setDice = arr => {
		setTrials([])
		_setDice(arr)
	}

	const on_number_of_dice_input = event =>
		setDice(Array(Number(event.target.value)).fill("?"))

	const get_next_symbol = cur => {
		if (cur == "?") return 1
		else {
			if (cur + 1 < 7) return cur + 1
			else return "?"
		}
	}

	const on_dice_click = idx => {
		const cur_wanted = dice[idx]

		setDice([
			...dice.slice(0, idx),
			get_next_symbol(cur_wanted),
			...dice.slice(idx + 1)
		])
	}

	const add_trial = () => {
		const trial = [...Array(dice.length)].map(() => random_number_inc(1, 6))

		setTrials([...trials, trial])
	}

	const add_hundred_trials = () => {
		const new_trials = [...Array(100)].map(() =>
			[...Array(dice.length)].map(() => random_number_inc(1, 6))
		)
		setTrials([...trials, ...new_trials])
	}
	const theoretical_probability = () =>
		(1 / 6) ** dice.filter(c => c != "?").length

	const experimental_probability = () => {
		const matches = trials.map(trial =>
			trial.every((t, i) => t == dice[i] || dice[i] == "?")
		)

		return matches.filter(m => m == true).length / trials.length
	}

	return (
		<div className="container mx-auto space-y-3">
			<div>
				<h1 className="text-2xl">Dice Guesser</h1>
				<BlueLink to="/">Home</BlueLink>
			</div>

			<div className="space-y-1">
				<fieldset>
					<label htmlFor="number-of-dice">Number of Dice: </label>
					<input
						type="number"
						name="number-of-dice"
						onInput={on_number_of_dice_input}
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
				{dice.map((wanted, idx) => (
					<Dice key={idx} onClick={() => on_dice_click(idx)}>
						{wanted}
					</Dice>
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
