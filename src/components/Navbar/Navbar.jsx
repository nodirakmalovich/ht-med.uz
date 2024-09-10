'use client'

import Link from 'next/link'
import './ui/navbar.scss'
import { useState } from 'react'
import { LanguageData } from '@/data/languageData'
import NavbarApi from './api/api'
import Search from '../Search/Search'
import CatalogModal from '../CatalogModal/CatalogModal'

export default function Navbar() {


    const { NavbarCategories } = NavbarApi()

    const [selectedLanguage, setSelectedLanguage] = useState(LanguageData.find(language => language.select));

    const handleSelect = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <div>
            <div className="navbar">
                <div className="my-container">
                    <div className="navbar_wrapper">

                        <div className='navbar_wrapper_left'>
                            <Link href={'/'}>
                                <img className='navbar_wrapper_left_logo' src="/Navbar/Logo.svg" alt="Logo ht-med" />
                            </Link>

                            <Link href={'/'} className='cursor-pointer'>

                                <p className='navbar_wrapper_left_title'>
                                    Hi-tech <br />
                                    Orient <br />
                                    Medical
                                </p>
                            </Link>


                        </div>

                        <div className="navbar_wrapper_right">
                            <ul className="navbar_wrapper_right_menu">
                                {
                                    NavbarCategories.map((category, index) => {
                                        return (
                                            <li className='navbar_wrapper_right_menu_item' key={index}>
                                                <Link className='navbar_wrapper_right_menu_item_link' href={category.link}>
                                                    {category.title}

                                                    {
                                                        category.subTitle && category.subTitle.length > 1 ? (
                                                            <img src="/Navbar/arrow_down.svg" alt="arrow_down" />
                                                        ) : null
                                                    }
                                                </Link>

                                                {
                                                    category.subTitle && category.subTitle.length > 0 && (
                                                        <ul className='navbar_wrapper_right_menu_item_subtitle'>
                                                            {category.subTitle.map((title, index) => {
                                                                return (
                                                                    <li className='navbar_wrapper_right_menu_item_subtitle_item' key={index}>
                                                                        <Link href={title.link}>
                                                                            {title.title}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    )
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className="language-dropdown">
                                <div className="language-dropdown__selected">
                                    <img
                                        src={selectedLanguage.image}
                                        alt={selectedLanguage.imageAlt}
                                        className='navbar_language_image'
                                    />
                                    <span>{selectedLanguage.title}</span>
                                    <img src="/Navbar/filled_arrow_down.svg" alt="" />
                                </div>

                                <ul className="language-dropdown__menu">
                                    {
                                        LanguageData.map((language, index) => (
                                            <li
                                                key={index}
                                                className={`language-dropdown__item ${language.value === selectedLanguage.value ? 'selected' : ''}`}
                                                onClick={() => handleSelect(language)}
                                            >
                                                <img
                                                    src={language.image}
                                                    alt={language.imageAlt}
                                                    className='navbar_language_image'
                                                />
                                                <span>{language.title}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='search_navbar my-container flex gap-[21px] items-center my-[50px] '>
                <CatalogModal />
                <Search />
            </div>
        </div>
    )
}