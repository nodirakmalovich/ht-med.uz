import TitleComponent from '@/components/TitleComponent/TitleComponent'
import './ui/HomeWork.scss'

export default function HomeWork() {
    return (
        <div className="HomeWork my-container">
            <div className='HomeWork_wrapper'>
                <TitleComponent
                    title={'Рабочий процесс'}
                />


                <div className="HomeWork_wrapper_scheme">
                    <div className="HomeWork_wrapper_scheme_card_1">
                        <div className="HomeWork_wrapper_scheme_card_1_number">1</div>
                        <div className="HomeWork_wrapper_scheme_card_1_title">
                            Вы оставляете заявку на необходимое оборудовани.
                        </div>
                    </div>

                    <div className="HomeWork_wrapper_scheme_card_4">
                        <div className="HomeWork_wrapper_scheme_card_4_number">4</div>
                        <div className="HomeWork_wrapper_scheme_card_4_title">
                            Исходя из критериев и необходимых технических характеристик оборудование производится на заводе.
                        </div>
                    </div>

                    <div className="HomeWork_wrapper_scheme_card_5">
                        <div className="HomeWork_wrapper_scheme_card_5_number">5</div>
                        <div className="HomeWork_wrapper_scheme_card_5_title">
                            По изготовлению товара на заводе, мы предоставляем вам чертежи помещения, где будет установлено оборудование.
                        </div>
                    </div>

                    <div className="HomeWork_wrapper_scheme_card_8">
                        <div className="HomeWork_wrapper_scheme_card_8_number">8</div>
                        <div className="HomeWork_wrapper_scheme_card_8_title">
                            По вашему желанию мы можем предложить дополнительные договоры на сервисное обслуживание сверх гарантийного срока.
                        </div>
                    </div>
                </div>

                <div className="HomeWork_wrapper_scheme">

                    <div className="HomeWork_wrapper_scheme_card_2">
                        <div className="HomeWork_wrapper_scheme_card_2_number">2</div>
                        <div className="HomeWork_wrapper_scheme_card_2_title">
                            Наши специалисты связываются с вами и консультируют по вопросам оборудования.
                        </div>
                    </div>

                    <div className="HomeWork_wrapper_scheme_card_3">
                        <div className="HomeWork_wrapper_scheme_card_3_number">3</div>
                        <div className="HomeWork_wrapper_scheme_card_3_title">
                            Отправляется запрос на сам завод наших партнёров.
                        </div>
                    </div>


                    <div className="HomeWork_wrapper_scheme_card_6">
                        <div className="HomeWork_wrapper_scheme_card_6_number">6</div>
                        <div className="HomeWork_wrapper_scheme_card_6_title">
                            После установки наш специалист обучает ваш персонал правильной эксплуатации оборудования.
                        </div>
                    </div>

                    <div className="HomeWork_wrapper_scheme_card_7">
                        <div className="HomeWork_wrapper_scheme_card_7_number">7</div>
                        <div className="HomeWork_wrapper_scheme_card_7_title">
                            После постгаран-тийного периода по вашему желанию мы заключаем до-говор на продолже-ние обслуживания.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}