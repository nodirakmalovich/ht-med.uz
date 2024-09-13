import DefaultCard from '../Cards/DefaultCard/DefaultCard'
import './ui/Header.scss'

export default function Header({ btnText, mainText }) {
    return (
        <div className="header">
            <p className="header_title">
                {mainText}
            </p>
            <DefaultCard
                text={btnText}
                
            />
        </div>
    )
}