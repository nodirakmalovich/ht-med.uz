import DefaultCard from '@/components/Cards/DefaultCard/DefaultCard'
import './ui/AboutUsPageHero.scss'
import Header from '@/components/Header/Header'

export default function AboutUsPageHero() {
    return (
        <div className="AboutUsPageHero">
            <div className='my-container'>
                <div className="AboutUsPageHero_wrapper">
                    <Header
                        mainText={'О нас'}
                        btnText={'Назад'}
                    />
                </div>
            </div>

            <div className="AboutUsPageHero_title">
                <p className='AboutUsPageHero_title_text'>
                    Мы ответственны за ваше доверие <br /> к нам
                </p>
            </div>
        </div>
    )
}