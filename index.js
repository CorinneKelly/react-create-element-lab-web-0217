//Code React element here
const meInReact = React.createElement('div', {className: 'me'},
	React.createElement('h1', {}, 'Mad Wicked Programmer'),
	React.createElement('p', {}, 'Who is dope AF'),
	React.createElement('ul', {className: 'me__interests'},
		[
			React.createElement('li', {}, 'Aspiring Surfer'),
			React.createElement('li', {}, 'Hot Dad Enthusiast'),
			React.createElement('li', {}, 'Adventurer'),
			React.createElement('li', {}, 'Traveler')
		]

	)
)

ReactDOM.render(meInReact, document.getElementById('main'))

