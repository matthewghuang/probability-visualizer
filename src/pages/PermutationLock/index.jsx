import React, { useState } from "react"
import { BlueLink } from "../../components/BlueLink"
import styled from "styled-components"

const Button = styled.button.attrs({
	className: "p-1 rounded-lg bg-green-400"
})

const factorial = n => (n ? n * factorial(n - 1) : 1)

export const PermutationLock = () => {
	const [numbers, setNumbers] = useState([])
	const [max, setMax] = useState(10)

	const on_number_of_numbers_input = event =>
		setNumbers(Array(Number(event.target.value)).fill(1))

	const on_max_input = event => {
		setNumbers(Array(numbers.length).fill(1))
		setMax(Number(event.target.value))
	}

	const on_lock_number_input = (idx, event) => {
		setNumbers([
			...numbers.slice(0, idx),
			event.target.value,
			...numbers.slice(idx + 1)
		])
	}

	const permutations = () =>
		Math.round(factorial(max) / factorial(max - numbers.length))

	const theoretical_probability = () => 1 / permutations()

	return (
		<div className="container mx-auto space-y-3">
			<div>
				<h1 className="text-2xl">Permutation Lock</h1>
				<BlueLink to="/">Home</BlueLink>
			</div>

			<div className="space-y-1">
				<fieldset>
					<label htmlFor="number-of-numbers">Number of Numbers: </label>
					<input
						type="number"
						name="number-of-numbers"
						min={1}
						max={10}
						onInput={on_number_of_numbers_input}
						className="p-1 bg-green-400 rounded-lg"
					/>
				</fieldset>
				<fieldset>
					<label htmlFor="max-number">Max Number: </label>
					<input
						type="number"
						name="max-number"
						min={10}
						max={100}
						onInput={on_max_input}
						className="p-1 bg-green-400 rounded-lg"
					/>
				</fieldset>
			</div>

			<div className="flex space-x-2">
				{numbers.map((n, i) => (
					<input
						type="number"
						key={i}
						value={n}
						min="1"
						max={max}
						onInput={event => on_lock_number_input(i, event)}
						className="w-24 border-b"
					/>
				))}
			</div>

			<div>
				There are <span className="font-mono">{permutations()}</span>{" "}
				permutations
				<br />
				The probability of guessing this lock code is:{" "}
				<span className="font-mono">{theoretical_probability() * 100}%</span>
			</div>
		</div>
	)
}
