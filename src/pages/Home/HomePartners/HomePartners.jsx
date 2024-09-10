'use client'
import PartnersCard from '@/components/Cards/PartnersCard/PartnersCard'
import HomePartnersApi from './api/HomePartnersApi'
import './ui/HomePartners.scss'

export default function HomePartners() {

    const { partnersList } = HomePartnersApi()
    return (
        <div className="HomePartners ">

            <div className="HomePartners_wrapper my-container">
                <div className="HomePartners_wrapper_title">
                    <p className="HomePartners_wrapper_title_text">
                        Наши партнеры
                    </p>

                    <div className='HomePartners_wrapper_title_line'></div>
                </div>

                <div className="HomePartners_wrapper_partners">
                    {
                        partnersList?.map((item, index) => {
                            return (
                                <div key={index}>
                                    
                                    <PartnersCard
                                        image={item.image}
                                        name={item.id}
    
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}