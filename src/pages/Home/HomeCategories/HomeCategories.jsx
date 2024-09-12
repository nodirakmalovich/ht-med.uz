'use client'

import CatalogCard from '@/components/Cards/CatalogCard/CatalogCard'
import HomeCategoriesApi from '../../../data/HomeCategoriesApi'
import './ui/HomeCategories.scss'

export default function HomeCategories() {

    const { HomeCategories } = HomeCategoriesApi()

    return (
        <div className="home_categories">
            <div className="my-container">
                <div className="home_categories_wrapper">
                    <div className="home_categories_wrapper_title">
                        <p className="home_categories_wrapper_title_text">
                            Категории товаров
                        </p>

                        <div className="home_categories_wrapper_title_images">
                            <img src="/Arrow-left-side.png" alt="Arrow-left-side" />
                            <img src="/Arrow-right-side.svg" alt="Arrow-left-side" />

                        </div>
                    </div>

                    <div className='home_categories_wrapper_categories'>
                        {
                            Array.isArray(HomeCategories) && HomeCategories.map((category, index) => {
                                return (
                                    <div key={index}>
                                        <CatalogCard
                                            image={category.image}
                                            imageAlt={category.slug}
                                            text={category.name}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}