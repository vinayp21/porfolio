import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import MediaQuery from 'react-responsive';
import AboutMe from 'components/AboutMePage/AboutMePage';
import Contact from 'components/Contact/Contact';
import Home from 'components/home';
import breakpoint from './config';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = (
	<Router>
		<Switch>
			<AnimatedSwitch
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				className="switch-wrapper"
			>
				<Route exact path="/" component={Home} />
				{/* <Route component={Home} /> */}
				<MediaQuery query={breakpoint.IS_DESKTOP}>
					<Route exact path="/about-me" component={AboutMe} />
					<Route path="/about-me/:option" component={AboutMe} />
					<Route path="/contact" component={Contact} />
				</MediaQuery>
			</AnimatedSwitch>
		</Switch>
	</Router>
);
export default routes;

ReactDOM.render(routes, document.getElementById('root'));
