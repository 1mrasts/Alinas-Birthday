import { Link } from 'react-router'
import s from './Header.module.scss'

export const Header = () => {
	return (
		<header className='header-wrapper'>
			<div className={s.container}>
				<nav>
					<Link to='/about-me'>Обо мне</Link>
					<Link to='/family'>Семья</Link>
					<Link to='/childhood'>Детство</Link>
				</nav>
			</div>
		</header>
	)
}
