import HomeContact from '@/pages/Home/HomeContact/HomeContact'
import './ui/ContactPageHero.scss'
import MainButton from '@/components/Buttons/MainButton/mainButton'

export default function ContactPageHero() {
    return (
        <div className="ContactPageHero">
            <div className="my-container">
                <div className="ContactPageHero_wrapper">
                    <p className="ContactPageHero_wrapper_header">
                        Контактная информация
                    </p>
                </div>

                <div className="HomeContact_data">
                    <div className="HomeContact_data_address">
                        <div className="HomeContact_data_address_location">
                            <img
                                src="/location.svg"
                                alt="location"
                            />

                            <div className='HomeContact_data_address_location_name'>
                                <p className='HomeContact_data_address_location_name_item'>
                                    Адрес
                                </p>
                                <p className='HomeContact_data_address_location_name_city'>
                                    Ташкент Сергилийский р-н. <br />
                                    Кумарик МфУ улица Пос.Гагарина, 26
                                </p>
                            </div>

                        </div>

                        <div className="HomeContact_data_address_location middle">
                            <img
                                src="/message.svg"
                                alt="location"
                            />

                            <div className='HomeContact_data_address_location_name'>
                                <p className='HomeContact_data_address_location_name_item'>
                                    Электронная почта
                                </p>
                                <p className='HomeContact_data_address_location_name_city'>
                                    alisher@ht-med.uz
                                </p>
                            </div>

                        </div>

                        <div className="HomeContact_data_address_location last">
                            <img
                                src="/message.svg"
                                alt="message"
                            />

                            <div className='HomeContact_data_address_location_name'>
                                <p className='HomeContact_data_address_location_name_item'>
                                    Телефон
                                </p>
                                <p className='HomeContact_data_address_location_name_city'>
                                    +99890 1234567
                                </p>
                            </div>

                            <div className="HomeContact_data_address_location_accounts">
                                <a target='_blank' href="https://t.me/alisher971310789">
                                    <img src="/telegram_black.svg" alt="telegram_black" />
                                </a>
                                <a target='_blank' href='https://www.facebook.com/people/Hi-Tech-Orient-Medical/61550734508645/'>
                                    <img src="/facebook.svg" alt="facebook" />
                                </a>
                                <a target='_blank' href='https://www.instagram.com/hi_tech_orient_medical_new/'>
                                    <img src="/instagram.svg" alt="instagram" />
                                </a>
                            </div>

                        </div>


                    </div>

                    <form className="HomeContact_data_form">
                        <p className='HomeContact_data_form_title'>
                            Заявка
                        </p>

                        <input className='HomeContact_data_form_input' type="text" placeholder='Имя' />
                        <input className='HomeContact_data_form_input' type="text" placeholder='Номер' />
                        <input className='HomeContact_data_form_input' type="text" placeholder='Техт' />

                        <div className='HomeContact_data_form_button'>
                            <MainButton
                                text={'Отправить'}
                            />
                        </div>
                    </form>


                </div>
                <iframe className='HomeContact_location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.9202283718834!2d69.255847!3d41.250508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b278f47926f%3A0x58c5ded3abff2147!2sHi-tech%20Orient%20Medical!5e0!3m2!1sen!2sus!4v1725794138740!5m2!1sen!2sus" height="289" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
            </div>
        </div>
    )
}