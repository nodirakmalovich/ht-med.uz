'use client'
import Link from 'next/link'
import './ui/BlogCard.scss'

export default function BlogCard({ image, title, description, time, slug }) {



    return (
        <div className="BlogCard">
            <img className='BlogCard_image' src={image} alt={title} />
            <div className="BlogCard_body">
                <p className="BlogCard_body_title">
                    {title}
                </p>
                <p className="BlogCard_body_description">
                    {description}
                </p>
                <div className="BlogCard_body_date">
                    <p className="BlogCard_body_date_time">
                        {time}
                    </p>

                    <div className="BlogCard_body_date_link">
                        <Link className="BlogCard_body_date_link_item" href={'#'}>
                            <img src="/Arrow-Right.svg" alt="Arrow-Right" />
                        </Link>
                        <p className="BlogCard_body_date_link_text">
                            Перейти
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}