import './ui/PartnersCard.scss'

export default function PartnersCard({image, name, key}) {
    return (
        <div key={key} className="PartnersCard">
            <img className='PartnersCard_image' src={image} alt={name} />
        </div>
    )
}