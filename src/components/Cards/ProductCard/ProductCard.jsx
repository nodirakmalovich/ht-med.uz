export default function ProductCard({ image, title, availabilty }) {
    return (
        <div className="ProductCard">
            <img src={image} alt={title} className="ProductCard_image" />

            <div className="ProductCard_body">
                <p className="ProductCard_body_title">
                    {title}
                </p>

                <p className="ProductCard_body_">
                    {availabilty}
                </p>
            </div>
        </div>
    )
}