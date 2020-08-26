import React from 'react';
import myImage from '../../../../assets/images/circular.jpg';
import './AboutMeMenu.scss';

const AboutMeMenu = () => {
	return (
		<div className="AboutMeMenu text-center">
			<img src={`.${myImage}`} alt="vinay" width="200" />
			<div className="info">Personal Info</div>
			<ul>
				<li>
					<span className="fa fa-address-card info-icon" />
					<span>
						<b>Address</b>
					</span>
					<address className="info-description">Malleshwaram, Bangalore, 560003</address>
				</li>
				<li>
					<span className="fa fa-phone info-icon" />
					<span>
						<b>Phone</b>
						<div className="info-description">+91 7411542565</div>
					</span>
				</li>
				<li>
					<span className="fa fa-envelope info-icon" />
					<span>
						<b>Email</b>
						<div className="info-description">vinayprakash321@gmail.com</div>
					</span>
				</li>
			</ul>
		</div>
	);
};

export default AboutMeMenu;
