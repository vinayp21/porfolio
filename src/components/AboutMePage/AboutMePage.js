import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import AboutMeMenu from 'components/AboutMePage/AboutMeMenu/AboutMeMenu';
import AboutMeContent from 'components/AboutMePage/AboutMeContent/AboutMeContent';
import Footer from 'components/Footer/Footer';
import './AboutMePage.scss';

class AboutMePage extends Component {
	componentDidMount() {
		const {
			history,
			history: {
				location: { pathname },
			},
		} = this.props;
		if (pathname === '/about-me') {
			history.push('about-me/who-am-i');
		}
	}

	render() {
		const {
			match: {
				params: { option },
			},
		} = this.props;
		return (
			<div className="AboutMePage">
				<Header />
				<div className="about-me-section">
					<div className="row">
						<div className="col-lg-3 menu panel">
							<AboutMeMenu />
						</div>
						<div className="col-lg-9 content panel">
							<AboutMeContent selectedOption={option} />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
AboutMePage.propTypes = {
	match: PropTypes.objectOf().isRequired,
	history: PropTypes.objectOf().isRequired,
};
export default AboutMePage;
