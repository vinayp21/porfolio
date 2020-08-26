import React from 'react';
import './Banner.scss';
import myImage from '../../../assets/images/circular.jpg';

const Banner = () => {
	return (
		<div className="Banner">
			<div className="container">
				<img src={`.${myImage}`} alt="vinay" />
				<p className="name">VINAY PRAKASH</p>
				<div className="d-flex flex-row divider">
					<hr />
					<span className="fa fa-star star-icon" />
					<hr />
				</div>
				<div className="role">WEB DEVELOPER</div>
			</div>
		</div>
	);
};

export default Banner;
