import React from 'react';
import {
	Switch,
	Route,
	NavLink,
	useRouteMatch,
	useParams,
} from 'react-router-dom';
// import Canada from '../Canada/Canada';

const Galleries = (props) => {
	console.log(props);

	let { path, url } = useRouteMatch();

	const test = () => {
		// console.log(url, 'url');
		// console.log(path, 'path');
		console.log('galleries component');
		console.log(url, 'url');
	};
	return (
		<>
			<h1>Galleries</h1>
			<div>
				<ul>
					<li>
						<NavLink onClick={test} to='/canada'>
							Canada
						</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/cuba`}>Cuba</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/angkor`}>Angkor</NavLink>
					</li>
					<li>
						<NavLink to={`${url}/nyc`}>NYC</NavLink>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path={path}>
					<h3>Please select a destination</h3>
				</Route>
				<Route path={`${path}/:topicId`}>
					<Canada />
				</Route>
			</Switch>
		</>
	);
};

export default Galleries;

export const Canada = (props) => {
	console.log(props, 'hello');
	let { topicId } = useParams();

	return (
		<>
			<h1>{topicId}</h1>
		</>
	);
};
