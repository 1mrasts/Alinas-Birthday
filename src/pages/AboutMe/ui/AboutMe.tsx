import alina from '../alina.png'
import season from '../season.png'
import threeSister from '../three_sister.png'
import s from './AboutMe.module.scss'

export const AboutMe = () => {
	return (
		<section className={`${s.about_me} wrapper`}>
			<h1>Обо мне</h1>
			<img src={alina} alt='' />
			<div className={s.description}>
				<div className='text__block'>
					<p>
						Мне 30 лет. Я старшая из трёх сестёр, жена, мама — и где-то между
						всем этим ещё и просто я. Было всякое: шумное детство, первые
						ошибки, свадьба, дети, будни, которые иногда пролетают так быстро,
						что не успеваешь заметить. Я не всегда всё делала правильно, не
						всегда знала, как надо. Но я любила — своих, своё, своё маленькое и
						громкое. И знаете, я бы ничего не изменила.
					</p>
				</div>
				<div className={s.images}>
					<img src={threeSister} alt='' />
					<img src={season} alt='' />
				</div>
			</div>
		</section>
	)
}
