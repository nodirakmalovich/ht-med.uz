'use client'
import * as React from 'react';
import './ui/CatalogHero.scss'
import CatalogProduct from '../CatalogProduct/CatalogProduct';
import Accardion from '@/components/Accardion/Accardion';
import CatalogHeroApi from '@/data/CatalogHeroApi';

export default function CatalogHero() {

    const { catalogCategories } = CatalogHeroApi()
   

    return (
        <div className="CatalogHero ">
            <div className="CatalogHero_wrapper my-container">
                <div className="CatalogHero_wrapper_title">
                    <p className="CatalogHero_wrapper_title_text">
                        Категории товаров
                    </p>
                </div>
                <div className='CatalogHero_wrapper_menu'>
                    <div className='w-[35%]'>

                        {
                            catalogCategories?.map((category, index) => {
                                return (

                                    <div key={index}>
                                        <Accardion
                                            title={category.name}
                                            menuLink={category.child.map((link, index) => {
                                                return (<p className='mt-[10px] hover:text-[#FF0000] hover:font-[700] cursor-pointer' key={index}>{link.name}</p>)
                                            })}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-[65%]'>

                        <CatalogProduct />
                    </div>

                </div>

            </div>
        </div>
    )
}