import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Router } from './router/Router'
import '../shared/styles/index.scss'

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={Router} />,
)
