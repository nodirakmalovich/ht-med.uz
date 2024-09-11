import './ui/DefaultCard.scss'

export default function DefaultCard({ text }) {
    return (
        <div className="DefaultCard">
            <img src="/Arrow-left-side.png" alt="Arrow-left-side" className="DefaultCard_image" />
            <p className='DefaultCard_text'>
                {text}
            </p>
        </div>
    )

}