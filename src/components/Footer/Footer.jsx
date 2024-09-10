import Link from 'next/link'
import { FooterAdditionaMenu, FooterMainMenu } from './api/FooterApi'
import './ui/Footer.scss'
import ImageCard from '../Cards/ImageCard/ImageCard'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="my-container">
                <div className="Footer_wrapper">
                    <div className='Footer_wrapper_grid'>
                        <div className='Footer_wrapper_grid_info'>
                            <div className="Footer_wrapper_grid_info_logo">
                                <img src="/Navbar/logo.svg" alt="logo" />
                                <p className='Footer_wrapper_grid_info_logo_name'>
                                    Hi-tech <br />
                                    Orient <br />
                                    Medical
                                </p>
                            </div>

                            <p className='Footer_wrapper_grid_info_text'>
                                Цель компании – обеспечить население качественным медицинским оборудованием и создать здоровое будущее.
                            </p>

                            <a className='Footer_wrapper_grid_info_contact' target='_blank' href="#">
                                <img className='Footer_wrapper_grid_info_contact_image' src="/Footer/contact.svg" alt="contact" />
                                <p className='Footer_wrapper_grid_info_contact_text' >
                                    Служба поддержки <br />
                                    <span>
                                        +998 (97) 131 07 89
                                    </span>
                                </p>
                            </a>

                        </div>

                        <ul className="Footer_wrapper_grid_menu">
                            <li className='Footer_wrapper_grid_menu_main'>Меню</li>
                            {
                                FooterMainMenu.map((menu, index) => {
                                    return (
                                        <li key={index} className='Footer_wrapper_grid_menu_item'>
                                            <Link className='Footer_wrapper_grid_menu_item_link' href={menu.link}>
                                                {menu.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <ul className="Footer_wrapper_grid_menu">
                            <li className='Footer_wrapper_grid_menu_main'>Полезные ссылки</li>
                            {
                                FooterAdditionaMenu.map((menu, index) => {
                                    return (
                                        <li key={index} className='Footer_wrapper_grid_menu_item'>
                                            <Link className='Footer_wrapper_grid_menu_item_link' href={menu.link}>
                                                {menu.title}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <ul className="Footer_wrapper_grid_menu">
                            <li className='Footer_wrapper_grid_menu_main'>Полезные новости</li>
                            <li className='Footer_wrapper_grid_menu_item'>
                                Подпишитесь на наши социальные сети что быть в курсе всех новостей
                            </li>

                            <ImageCard
                                topImage={'/Footer/facebook_green.svg'}
                                topImageAlt={'facebook_green icon'}
                                topImageHref={'https://www.facebook.com/people/Hi-Tech-Orient-Medical/61550734508645/'}

                                leftImage={'/Footer/telegram_green.svg'}
                                leftImageAlt={'telegram_green icon'}
                                leftImageHref={'https://t.me/hitechorientmedicalnew'}

                                rightImage={'/Footer/youtube_green.svg'}
                                rightImageAlt={'youtube_green icon'}
                                rightImageHref={'https://www.youtube.com/@Hi-Tech_Orient_Medical'}

                                bottomImage={'/Footer/instagram_green.svg'}
                                bottomImageAlt={'instagram_green icon'}
                                bottomImageHref={'https://www.instagram.com/hi_tech_orient_medical_new/'}
                            />
                        </ul>
                    </div>

                    <div className="Footer_wrapper_border"></div>
                    <div className='Footer_wrapper_copwright'>

                        <p className='Footer_wrapper_copwright_text'>
                            Copyright © 2023 Tashkilot nomi | Barcha huquqlar himoyalangan
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}