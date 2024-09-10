import Link from "next/link";
import './ui/BigCard.scss';

export default function BigCard({ image, title, description, variant }) {

    return (
        <div className={`Big_Card ${variant}  box-border`}>
            <div className="Big_Card_left">
                <p className="Big_Card_left_title">
                    {title}
                </p>
                <p className="Big_Card_left_description">
                    {description}
                </p>
                <div className="Big_Card_left_link flex items-center">
                    <Link className="Big_Card_left_link_item" href={'#'}>
                        <img src="/Arrow-Right.svg" alt="Arrow-Right" />
                    </Link>
                    <p className="Big_Card_left_link_text">
                        Перейти
                    </p>
                </div>
            </div>

            <div className="Big_Card_right mt-4">
                <img src={image} alt={title} className="w-full h-auto" />
            </div>
        </div>
    );
}
