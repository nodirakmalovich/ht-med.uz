import TitleComponent from '@/components/TitleComponent/TitleComponent'
import './ui/HomeServices.scss'
import ServiceCard from '@/components/Cards/ServiceCard/ServiceCard'
import HomeServicesApi from '@/data/HomeServicesApi'

export default function HomeServices() {
    return (
        <div className="HomeServices">
            <div className="my-container">
                <div className="HomeServices_wrapper">
                    <TitleComponent
                        title={'Наши сервисы'}
                    />

                    <div className='HomeServices_wrapper_catalog'>
                        {HomeServicesApi.map((service, index) => {
                            return (
                                <div key={index}>
                                    <ServiceCard
                                        bg_image={service.image}
                                        title={service.title}
                                        description={service.description}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}