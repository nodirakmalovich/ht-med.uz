import './ui/ImageCard.scss'

export default function ImageCard({ topImage, topImageAlt, topImageHref, leftImage, leftImageAlt, leftImageHref, rightImage, rightImageHref, rightImageAlt, bottomImage, bottomImageAlt, bottomImageHref }) {
    return (
        <div className="ImageCard">
            <a className='ImageCard_link topImage' href={topImageHref}>
                <img className='ImageCard_link_item ' src={topImage} alt={topImageAlt} />
            </a>
            <a className='ImageCard_link leftImage' href={leftImageHref}>
                <img className='ImageCard_link_item ' src={leftImage} alt={leftImageAlt} />
            </a>
            <a className='ImageCard_link rightImage' href={rightImageHref}>
                <img className='ImageCard_link_item ' src={rightImage} alt={rightImageAlt} />
            </a>
            <a className='ImageCard_link bottomImage' href={bottomImageHref}>
                <img className='ImageCard_link_item ' src={bottomImage} alt={bottomImageAlt} />
            </a>

        </div>
    )
}