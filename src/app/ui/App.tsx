import { Outlet } from 'react-router'
import { Header } from '../../widgets/Header'
import { Footer } from '../../widgets/Footer'

export function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
