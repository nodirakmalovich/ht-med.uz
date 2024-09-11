import './ui/SingleProductCard.scss'

export default function SingleProductCard({ mainImage, title, secImage }) {
    return (
        <div className="SingleProductCard">
            <div className="SingleProductCard_main">
                <img className='SingleProductCard_main_image' src={mainImage} alt={title} />
            </div>
            <div className="SingleProductCard_secondary">
                    {secImage}
            </div>
        </div>
    )
}