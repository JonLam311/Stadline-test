import ReduxHome from './Containers/Home';
// import ReduxAbout from './Containers/About';
// import ReduxCalculator from './Containers/Calculator';
// import NotFound from './Containers/NotFound';

const routes = [
	{
		name: 'Home',
		path: '/',
		component: ReduxHome,
		protected: false,
	},
	// {
	// 	name: 'About',
	// 	path: '/about',
	// 	component: ReduxAbout,
	// 	protected: false,
	// },
	// {
	// 	name: 'Calculator',
	// 	path: '/calculator',
	// 	component: ReduxCalculator,
	// 	protected: false,
	// },
	// {
	// 	name: '404',
	// 	path: '404',
	// 	component: NotFound,
	// 	protected: false,
	// },
];

export default routes;
