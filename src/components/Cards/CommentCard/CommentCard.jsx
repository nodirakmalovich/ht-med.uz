import './ui/CommentCard.scss'

export default function CommentCard({ image, name, comment, position }) {

    return (
        <div className="CommentCard">
            <div className="CommentCard_person">
                <img className='CommentCard_person_image' src={image} alt={name} />
                <div className="CommentCard_person_info">
                    <p className="CommentCard_person_info_name">
                        {name}
                    </p>
                    <p className="CommentCard_person_info_position">
                        {position}
                    </p>
                </div>
            </div>

            <p className="CommentCard_comment">
                {comment}
            </p>

        </div>
    )

}