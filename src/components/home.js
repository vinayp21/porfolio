import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Header from 'components/Header/Header';
import Banner from 'components/Banner/Banner';
import Footer from 'components/Footer/Footer';
import breakpoint from '../config';

import Information from './AboutMePage/Information/Information';
import './home.scss';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			selectedOption: 'who-am-i',
		};
	}

	redirectUrl = () => {
		const { history } = this.props;
		history.push('/');
	};

	selectOption = (option) => {
		this.setState({ selectedOption: option });
	};

	render() {
		const { selectedOption } = this.state;
		return (
			<div className="home">
				<Header />
				<Banner />
				<MediaQuery query={breakpoint.IS_MOBILE}>
					<div className="mobile-nav row">
						<button
							type="button"
							onClick={() => this.selectOption('who-am-i')}
							className={`nav-btn col-4 text-center ${
								selectedOption === 'who-am-i' ? 'selected' : ''
							}`}
						>
							<span className="fa fa-user" />
						</button>
						<button
							type="button"
							onClick={() => this.selectOption('skills')}
							className={`nav-btn col-4 text-center ${
								selectedOption === 'skills' ? 'selected' : ''
							}`}
						>
							<span className="fa fa-gears" />
						</button>
						<button
							type="button"
							onClick={() => this.selectOption('work')}
							className={`nav-btn col-4 text-center ${
								selectedOption === 'work' ? 'selected' : ''
							}`}
						>
							<span className="fa fa-briefcase" />
						</button>
					</div>
					<Information selectedOption={selectedOption} />
				</MediaQuery>
				<Footer />
			</div>
		);
	}
}

Home.propTypes = {
	history: PropTypes.objectOf().isRequired,
};

export default Home;
