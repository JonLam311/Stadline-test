import React from 'react';

import ReduxIssue from '../Issue';

class Home extends React.Component {
	render() {
		return (
			<main className="container-fluid">
				<ReduxIssue />
			</main>
		);
	}
}

export default Home;
