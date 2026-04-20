import { createBrowserRouter } from 'react-router'
import { App } from '../ui/App'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
])
