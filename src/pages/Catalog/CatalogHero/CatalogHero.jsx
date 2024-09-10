'use client'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { CatalogHeroApi } from './api/CatalogHeroApi'
import './ui/CatalogHero.scss'
import CatalogProduct from '../CatalogProduct/CatalogProduct';

export default function CatalogHero() {

    const { catalogCategories } = CatalogHeroApi()

    console.log(catalogCategories);


    return (
        <div className="CatalogHero ">
            <div className="CatalogHero_wrapper my-container">
                <div className="CatalogHero_wrapper_title">
                    <p className="CatalogHero_wrapper_title_text">
                        Категории товаров
                    </p>
                </div>
                <div className='CatalogHero_wrapper_menu'>

                    {
                        catalogCategories?.map((category, index) => {
                            return (
                                <Accordion className='accardion' key={index}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        className='accardion_title'
                                    >
                                        {category.name}
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {/* <ul className="accardion_menu">
                                            <li className='accardion_menu_item'>
                                                {category.child.map((item, index) => {
                                                    return (
                                                        <Link key={index} className='accardion_menu_item_link' href={'#'}>
                                                            {item.name}
                                                        </Link>
                                                    )
                                                })}
    
                                            </li>
                                        </ul> */}
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })
                    }

                    <CatalogProduct />

                </div>

            </div>
        </div>
    )
}