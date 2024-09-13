import './ui/MapCard.scss';

export default function MapCard({ image, title, number }) {
    return (
        <div className="MapCard">
            <img className='MapCard_image' src={image} alt={title} />
            <p className="MapCard_number">
                {number}
            </p>
            <p className="MapCard_title">
                {title}
            </p>
        </div>
    )
}