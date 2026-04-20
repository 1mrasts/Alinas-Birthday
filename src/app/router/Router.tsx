import { createBrowserRouter } from 'react-router'
import { AboutMe } from '../../pages/AboutMe/ui/AboutMe'
import { Childhood } from '../../pages/Childhood'
import { Family } from '../../pages/Family'
import { Main } from '../../pages/Main/ui/Main'
import { App } from '../ui/App'

export const Router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					index: true,
					element: <Main />,
				},
				{
					path: '/about-me',
					element: <AboutMe />,
				},
				{
					path: '/family',
					element: <Family />,
				},
				{
					path: '/childhood',
					element: <Childhood />,
				},
			],
		},
	],
	{
		basename: '/Alinas-Birthday',
	}
)