import SingleProductCard from '@/components/Cards/SingleProductCard/SingleProductCard'
import './ui/SingleProductHero.scss'

export default function SingleProductHero() {

    return (
        <div className="SingleProductHero">
            <div className="my-container SingleProductHero_wrapper">
                <div className="SingleProductHero_wrapper_left">
                    <SingleProductCard />
                </div>
            </div>
        </div>
    )
}