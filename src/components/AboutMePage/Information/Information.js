import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import breakpoint from '../../../config';
import './Information.scss';

const Information = ({ selectedOption }) => {
	return (
		<div className="Information">
			<div className="d-flex flex-row option">
				<hr />
				{selectedOption === 'skills' && <b className="option-name">My Skills</b>}
				{selectedOption === 'who-am-i' && <b className="option-name">About Me</b>}
				{selectedOption === 'work' && <b className="option-name">Work Experience</b>}

				<hr />
			</div>
			{selectedOption === 'skills' && (
				<div className="skill">
					<MediaQuery query={breakpoint.IS_DESKTOP}>
						<table className="table table-hover">
							<tbody>
								<tr>
									<td>
										<b>Programming Languages</b>
									</td>
									<td>JavaScript</td>
								</tr>
								<tr>
									<td>
										<b>Javascript Frameworks/Libraries</b>
									</td>
									<td>ReactJS, ReduxJs, VueJs, EmberJs, JQuery</td>
								</tr>
								<tr>
									<td>
										<b>Build Tools</b>
									</td>
									<td>Webpack, Rollup, Babel</td>
								</tr>
								<tr>
									<td>
										<b>Web Technologies</b>
									</td>
									<td>HTML5, CSS3, SASS</td>
								</tr>
								<tr>
									<td>
										<b>CSS Frameworks</b>
									</td>
									<td>Bootstrap, Foundation</td>
								</tr>
								<tr>
									<td>
										<b>Server Side Scripting</b>
									</td>
									<td>Node JS, Express JS</td>
								</tr>
								<tr>
									<td>
										<b>Database</b>
									</td>
									<td>Mongodb, MySql</td>
								</tr>
								<tr>
									<td>
										<b>Version Control System</b>
									</td>
									<td>GIT</td>
								</tr>
							</tbody>
						</table>
					</MediaQuery>
					<MediaQuery query={breakpoint.IS_MOBILE}>
						<ul>
							<li>
								<b>Programming Languages</b>
							</li>
							<li>JavasSript</li>
							<li>
								<b>Javascript Frameworks/Libraries</b>
							</li>
							<li>ReactJS, EmberJS, AngularJs(1.5x), JQuery</li>
							<li>
								<b>Build Tools</b>
							</li>
							<li>Webpack, Babel</li>
							<li>
								<b>Web Tecnologies</b>
							</li>
							<li>HTML5, CSS3, SASS</li>
							<li>
								<b>CSS Frameworks</b>
							</li>
							<li>Bootstarp, Foundation</li>
							<li>
								<b>Server Side Scripting</b>
							</li>
							<li>Node JS, Express JS</li>
							<li>
								<b>Version Control System</b>
							</li>
							<li>GIT</li>
						</ul>
					</MediaQuery>
				</div>
			)}
			{selectedOption === 'who-am-i' && (
				<div className="about-me-text">
					Hello,
					{/* <p>
						I am a web developer, based out of Bangalore location, I have an experience
						of 6.5 years with a demonstrated history of working in the consulting
						industry. I am skilled in JavaScript and its frameworks/libraries and have
						extensively worked on web based applications. I have a Bachelor’s Degree
						focused in Electronics and Communications Engineering from Sapthagiri
						College of Engineering affiliated to Visvesvaraya Technological University.
					</p> */}
					<ul>
						<li>
							Myself Vinay, and I am a web developer, with 6.5 years of experience,
							based out of Bangalore location
						</li>
						<li>
							I have experience working on bulding respinsive web applications using
							vanilla JavaScript, and its frameworks/libraries like ReactJs and vueJs
						</li>
						<li>
							I have worked on various domains like e-commerce, banking and even build
							b2b products for reputed clients.
						</li>
						<li>
							I have conducted training session on ReactJs, ReduxJs and Es6 for the
							beginners.
						</li>
						<li>
							I have experience working ajile methodology and have lead the team of
							2-3 developers
						</li>
						<li>
							I closely work with designers and backend develpers during day to day
							development to get right insights on building the application
						</li>
						<li>
							I have a Bachelor’s Degree focused in Electronics and Communications
							Engineering from Sapthagiri College of Engineering affiliated to
							Visvesvaraya Technological University
						</li>
					</ul>
				</div>
			)}
			{selectedOption === 'work' && (
				<div className="work-education">
					<div className="row work-exp">
						<div className="col-lg-4 col-12 duration">Jan 2014 - Dec 2015</div>
						<div className="col-lg-8 col-12">
							<b>Torry Harris Business Solutions</b>
							<div>Associate Software Enginerr</div>
							<p>
								Worked as a full stack developer, developing responsive web
								applications and using Java as backend language
							</p>
						</div>
						<div className="col-lg-4 col-12 duration">Dec 2015 - Present</div>
						<div className="col-lg-8 col-12">
							<b>Deloitte Consulting</b>
							<div>Consultant</div>
							<p>
								Worked as a Frontend/UI developer, developing responsive web
								applications and integrating with backend service
							</p>
						</div>
					</div>
					<div className="d-flex flex-row option">
						<hr />
						<b className="option-name">Education</b>
						<hr />
					</div>
					<div className="row work-exp">
						<div className="col-lg-4 col-12 duration">2009 - 2013</div>
						<div className="col-lg-8 col-12">
							<b>Sapthagiri College Of Engineering, Bangalore</b>
							<div>Bachelor Of Engineering</div>
							<div>Visvesvarayaraya Technological University</div>
							<div>Aggregate: 71.35%</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

Information.propTypes = {
	selectedOption: PropTypes.string.isRequired,
};

export default Information;
