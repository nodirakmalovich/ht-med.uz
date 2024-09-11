'use client'

import initTranslations from "@/app/i18n";
import { locales } from "../../../../i18nConfig";



export default async function NavbarApi() {

    const { t } = await initTranslations(locales, ['navbar']);


    const NavbarCategories = [
        {
            id: 1,
            title: 'Главная',
            subTitle: [],
            link: '/',
        },
        {
            id: 2,
            title: 'Каталог',
            subTitle: [],
            link: '/catalog',
        },
        {
            id: 3,
            title: 'О нас',
            subTitle: [
                {
                    title: 'О компании',
                    link: '/about-us/company'
                },
                {
                    title: 'Достижения',
                    link: '/about-us/achivments'
                },
                {
                    title: 'Команда',
                    link: '/about-us/team'
                },
                {
                    title: 'Галерея',
                    link: '/about-us/gallery'
                },
            ],
            link: '/about-us',
        },
        {
            id: 4,
            title: 'Новости',
            subTitle: [],
            link: '/news',
        },
        {
            id: 5,
            title: 'Блог',
            subTitle: [],
            link: '/blog',
        },
        {
            id: 6,
            title: 'Контакты',
            subTitle: [],
            link: '/contact',
        },

    ]

    return { NavbarCategories }

}