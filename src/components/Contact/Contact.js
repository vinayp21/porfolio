import React, { Component } from 'react';
import axios from 'axios';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import AboutMeMenu from 'components/AboutMePage/AboutMeMenu/AboutMeMenu';
import './Contact.scss';

class Contact extends Component {
	// eslint-disable-next-line react/state-in-constructor
	state = {
		name: '',
		emailId: '',
		message: '',
		phone: '',
		messageSuccess: false,
	};

	getformData = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitConatctForm = (e) => {
		e.preventDefault();
		const { name, emailId, message, phone } = this.state;

		axios
			.post('http://localhost:8000/sendMessage', {
				name,
				emailId,
				message,
				phone,
			})
			.then(() => {
				this.setState({ messageSuccess: true });
			})
			.catch((error) => {
				console.log(error);
			});
		this.setState({
			name: '',
			emailId: '',
			message: '',
			phone: '',
		});
	};

	render() {
		const { name, emailId, message, phone, messageSuccess } = this.state;
		return (
			<div className="contact">
				<Header />
				<div className="row">
					<div className="col-lg-3 menu panel">
						<AboutMeMenu />
					</div>
					<div className="col-lg-9 form ">
						<h1 className="text-center contact-heading">CONTACT</h1>
						<form className="contact-form" onSubmit={this.submitConatctForm}>
							<div className="row">
								<div className="col-3 label">Full Name*</div>
								<div className="col-9">
									<input
										type="text"
										onChange={this.getformData}
										name="name"
										value={name}
										autoComplete="off"
										required
									/>
								</div>
								<div className="col-3 label">Email Id*</div>
								<div className="col-9">
									<input
										type="email"
										onChange={this.getformData}
										name="emailId"
										value={emailId}
										autoComplete="off"
										required
									/>
								</div>
								<div className="col-3 label">Phone Number</div>
								<div className="col-9">
									<input
										type="text"
										onChange={this.getformData}
										name="phone"
										value={phone}
										autoComplete="off"
									/>
								</div>
								<div className="col-3 label">Message*</div>
								<div className="col-9">
									<textarea
										col="2"
										onChange={this.getformData}
										row="4"
										name="message"
										value={message}
										autoComplete="off"
										required
									/>
								</div>
								<input type="submit" className="btn btn-primary" value="Submit" />
							</div>
							{messageSuccess && <p>Thank You for your Message</p>}
						</form>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}

export default Contact;
