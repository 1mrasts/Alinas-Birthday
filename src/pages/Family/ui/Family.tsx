import child from '../child.png'
import family from '../family.png'
import husband from '../husband.png'
import marry from '../marry.png'
import s from './Family.module.scss'

export const Family = () => {
	return (
		<section className={`${s.family} wrapper`}>
			<h1>Семья</h1>
			<div className={s.family__text}>
				<img src={family} alt='' />
				<p>
					У нас хорошая семья. Шумная, местами хаотичная, но своя. Дети вечно
					лезут куда не просят, муж делает вид, что всё под контролем, я делаю
					вид, что верю. Новый год — елка, Comedy Club на фоне, и все почему-то
					в кадре с серьёзными лицами. Вот это и есть мы.
				</p>
			</div>
			<div className={s['family__description']}>
				<img src={marry} alt='' />
				<div className='text__block'>
					<p>
						Я была счастлива в этот момент. Даже не задумывалась ни о чём — ни о
						гостях, ни о том, всё ли идёт по плану. Просто он рядом, и этого
						было достаточно.
					</p>
				</div>
			</div>
			<div className={`${s.family__text} reverse`}>
				<img src={child} alt='' />
				<p>
					У нас хорошая семья. Шумная, местами хаотичная, но своя. Дети вечно
					лезут куда не просят, муж делает вид, что всё под контролем, я делаю
					вид, что верю. Новый год — елка, Comedy Club на фоне, и все почему-то
					в кадре с серьёзными лицами. Вот это и есть мы.
				</p>
			</div>
			<img src={husband} alt='' />
		</section>
	)
}
