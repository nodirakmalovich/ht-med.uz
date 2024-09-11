'use client'
import MainButton from '@/components/Buttons/MainButton/mainButton';
import './ui/HomeCarousel.scss'
import BigCard from '@/components/Cards/BigCard/BigCard';
import useCarouselCategoriesApi from './api/carouselCategoriesApi';


export default function HomeCarousel() {

    const { carouselCategories } = useCarouselCategoriesApiCarouselCategoriesApi()

    const singleCategory = carouselCategories ? carouselCategories[0] : {}

    const firstCard = carouselCategories ? carouselCategories[2] : {}
    const secondCard = carouselCategories ? carouselCategories[4] : {}



    return (
        <div className="carousel">
            <div className='my-container'>
                <div className="carousel_wrapper">
                    <div className="carousel_wrapper_left">
                        <p className="carousel_wrapper_left_title">
                            {
                                singleCategory?.title
                            }
                        </p>

                        <p className="carousel_wrapper_left_description">
                            {
                                singleCategory?.body
                            }
                        </p>

                        <MainButton
                            text={'Подробнее'}
                        />
                    </div>

                    <div className="carousel_wrapper_right">
                        <img src={
                            singleCategory?.image
                        } alt={singleCategory?.title} />
                    </div>
                </div>

                <div className='carousel_ads '>
                    <BigCard
                        variant="blue"
                        title={firstCard?.title}
                        description={firstCard?.body}
                        image={firstCard?.image}
                    />

                    <BigCard
                        variant="green"
                        title={secondCard?.title}
                        description={secondCard?.body}
                        image={secondCard?.image}
                    />
                </div>
            </div>


        </div >
    );
}

