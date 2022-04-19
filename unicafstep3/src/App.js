
import React, {useState} from "react";


const Statistics = (props) => {
	return (
		<div>
			<h3>good {props.good}</h3>
			<h3>neutral {props.neutral}</h3>
			<h3>bad {props.bad}</h3>
			<h3>all {props.All}</h3>
			<h3>average {props.average}</h3>
			<h3>positive {props.positive}</h3>
		</div>
	)
}

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
			
			<Statistics 
				good={good} 
				neutral= {neutral} 
				bad= {bad} 
				All= {good + neutral + bad} 
				average= {(good - bad)/(good + neutral + bad)} 
				positive= {(good + neutral)/(good + neutral + bad)}
			/>
		</div>
	)
}
export default App