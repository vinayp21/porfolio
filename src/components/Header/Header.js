import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			test: true,
		};
	}

	render() {
		const { test } = this.state;
		return (
			<header className="Header">
				{test}
				<nav className="navbar navbar-expand-lg navbar-light">
					<Link className="navbar-brand " to="/">
						<span className="fa fa-vimeo v-icon" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#1navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto" />
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/about-me/who-am-i">
									About Me
								</Link>
								{/* <a className="nav-link " href="/about-me">
									About Me
								</a> */}
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
