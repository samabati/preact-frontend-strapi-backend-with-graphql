import './app.css'
import {Router} from 'preact-router';
import SiteHeader from './components/header/header';
import Home from './pages/home/home';
import Category from './pages/category/category';
import Reviews from './pages/review-details/reviews';

export function App() {

  return (
    <div id="app">
		<SiteHeader></SiteHeader>
		<Router>
			<Home path="/"/>
			<Category path="/category/:id"/>
			<Reviews path="reviews/:id"/>
		</Router>
	</div>
  )
}
