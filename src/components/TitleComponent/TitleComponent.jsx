import './ui/TitleComponent.scss'

export default function TitleComponent({ title, }) {

    return (
        <div className="TitleComponent">
            <p className='TitleComponent_text'>{title}</p>
            
            <img className='TitleComponent_line' src="/line.svg" alt="line" />
        </div>
    )
}
