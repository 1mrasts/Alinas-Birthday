import { createBrowserRouter } from 'react-router'
import { AboutMe } from '../../pages/AboutMe/ui/AboutMe'
import { App } from '../ui/App'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about-me',
				element: <AboutMe />,
			},
		],
	},
])
