import './ui/CatalogCard.scss'

export default function CatalogCard({image, text, imageAlt}) {
    return (
        <div className="card">
            <img className='card_image' src={image} alt={imageAlt} />
            <div className="card_text">
                {text}
            </div>
        </div>
    )
}