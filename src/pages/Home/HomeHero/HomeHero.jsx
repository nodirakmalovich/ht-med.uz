import CatalogModal from '@/components/CatalogModal/CatalogModal'
import './ui/HomeHero.scss'
import Search from '@/components/Search/Search'

export default function HomeHero() {
    return (

        <div className="my-container">
            <div className="catalog_box flex gap-[21px] items-center my-[30px]">
                <CatalogModal />
                <Search />
            </div>
        </div>


    )
}