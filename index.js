//Code React element here
const meInReact = React.createElement('div', {className: 'me'},
	React.createElement('h1', {}, 'An Awesome Person'),
	React.createElement('p', {}, 'Who is learning React'),
	React.createElement('ul', {className: 'me__interests'},
		[
			React.createElement('li', {}, 'JavaScript'),
			React.createElement('li', {}, 'Hot Dad Enthusiast'),
			React.createElement('li', {}, 'Adventurer'),
			React.createElement('li', {}, 'Traveler')
		]

	)
)

ReactDOM.render(meInReact, document.getElementById('main'))

