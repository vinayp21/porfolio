import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Information from 'components/AboutMePage/Information/Information';
import './AboutMeContent.scss';

const AboutMeContent = ({ selectedOption }) => {
	return (
		<div className="AboutMeContent">
			<h1 className="name">Vinay Prakash</h1>
			<div className="role">UI Developer</div>
			<div className="text-content">
				<div className="d-flex flex-row justify-content-center">
					<Link to="/about-me/who-am-i">
						<div
							className={`nav-icon  ${
								selectedOption === 'who-am-i' ? 'selected' : ''
							}`}
						>
							<span className="fa fa-user" />
						</div>
					</Link>
					<Link to="/about-me/skills">
						<div
							className={`nav-icon  ${selectedOption === 'skills' ? 'selected' : ''}`}
						>
							<span className="fa fa-gears" />
						</div>
					</Link>
					<Link to="/about-me/work">
						<div className={`nav-icon  ${selectedOption === 'work' ? 'selected' : ''}`}>
							<span className="fa fa-briefcase" />
						</div>
					</Link>
				</div>
			</div>
			<Information selectedOption={selectedOption} />
		</div>
	);
};
AboutMeContent.propTypes = {
	selectedOption: PropTypes.string.isRequired,
};

export default AboutMeContent;
