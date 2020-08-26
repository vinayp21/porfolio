import React from 'react';
import './Footer.scss';

const Footer = () => {
	return (
		<div className="Footer">
			<div className="row">
				<div className="col-6 col-lg-6 text-left footer-left">Copyright &copy; 2020</div>
				<div className="col-6 col-lg-6 text-right social-icon">
					<a
						href="https://www.linkedin.com/in/vinay-p-9ba107127/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="fa fa-linkedin-square " />
					</a>
					<a href="https://github.com/vinayp21" target="_blank" rel="noreferrer">
						<span className="fa fa-github-square" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
