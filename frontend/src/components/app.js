import { h } from 'preact';
import { Router } from 'preact-router';
import SiteHeader from './header/header';
import Home from '../routes/home/home';
import Category from '../routes/category/category';
import Reviews from '../routes/review-details/reviews';

const App = () => (
	<div id="App">
		<SiteHeader></SiteHeader>
		<Router>
			<Home path="/"/>
			<Category path="/category/:id"/>
			<Reviews path="reviews/:id"/>
		</Router>
	</div>
);

export default App;
