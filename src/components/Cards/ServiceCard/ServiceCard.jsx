import './ui/ServiceCard.scss'

export default function ServiceCard({ bg_image, description, title }) {
    return (
        <div className="ServiceCard">
            <div className="ServiceCard_blur"></div>
            <img className='ServiceCard_image' src={bg_image} alt={title} />
            <div className='ServiceCard_body'>
                <div className="ServiceCard_body_title">
                    {title}
                </div>
                <div className="ServiceCard_body_description">
                    {description}
                </div>
            </div>
        </div>
    )
}