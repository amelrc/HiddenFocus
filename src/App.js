import './App.css';
import styled from 'styled-components';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Menu from './components/Menu/Menu.jsx';
import Canada from './components/Canada/Canada.jsx';
import { Themes } from './components/Themes';
import { Destinations } from './components/Destinations';
import { Shows } from './components/Shows';
import { WhatNow } from './components/WhatNow';
import { Acknowledgements } from './components/Acknowledgements';
import Loader from './components/Loader';
import { Header } from './components/Header/Header';
import Galleries from './components/Galleries/Galleries';

const AppWrapper = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
`;

function App() {
	return (
		<HashRouter>
			<div>
				<Header />
				{/* <Header open={open} setOpen={setOpen} /> */}
				<AppWrapper>
					<Switch>
						<Route exact path='/' component={Home} />
						{/* <Route path="/themes" component={Themes} /> */}
						<Route path='/galleries' component={Galleries} />
						<Route path='/menu' component={Menu} />
						{/* <Route path='/canada' component={Canada} /> */}
						{/* <Route path="/destinations" component={Destinations} /> */}
						{/* <Route path="/shows" component={Shows} /> */}
						{/* <Route path="/what_now" component={WhatNow} /> */}
						{/* <Route path="/acknowledgements" component={Acknowledgements} /> */}
						{/* <Route path="/loader" component={Loader} /> */}
					</Switch>
				</AppWrapper>
			</div>
		</HashRouter>
	);
}

export default App;
