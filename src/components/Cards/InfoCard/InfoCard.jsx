
import './ui/InfoCard.scss'

export default function InfoCard({ title, description }) {
    return (
        <div className="InfoCard">
            <p className="InfoCard_header">
                Описание товара:
            </p>
            <p className='InfoCard_title'>
                {title}
            </p>
            <p className="InfoCard_description">
                {description}
            </p>

        </div>
    )
}