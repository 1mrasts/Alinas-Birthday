import { Outlet } from 'react-router'
import { Header } from '../../widgets/Header'

export function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
