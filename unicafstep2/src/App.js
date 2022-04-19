import React, {useState} from "react";

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	
	return (
		<div>
			<h1>give feedback</h1>
			
			<br />
			
			<button onClick = {() => setGood(good + 1)}>good</button>
			
			<button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
			
			<button onClick = {() => setBad(bad + 1)}>bad</button>
			
			<br />
			
			<h1>statistics</h1>
			
			<br />
			
			<h3>good {good}</h3>
			<h3>neutral {neutral}</h3>
			<h3>bad {bad}</h3>
			<h3>all {good + neutral + bad}</h3>
			<h3>average {(good - bad)/(good + neutral + bad)}</h3>
			<h3>positive {(good + neutral)/(good + neutral + bad)}</h3>
		</div>
	)
}
export default App