import './ui/PersonCard.scss'

export default function PersonCard({ image, name, position }) {
    return (
        <div className="PersonCard">
            <img className='PersonCard_image' src={image} alt={name} />
            <div className="PersonCard_body">
                <p className="PersonCard_body_name">
                    {name}
                </p>
                <p className="PersonCard_body_position">
                    {position}
                </p>
            </div>
        </div>
    )
}